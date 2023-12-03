import model
import pandas as pd 
from sklearn.cluster import *
import numpy as np
from flask import Flask, jsonify, request, url_for, json, session
from flask_session import Session
from flask_bcrypt import Bcrypt #pip install Flask-Bcrypt = https://pypi.org/project/Flask-Bcrypt/
from flask_cors import CORS, cross_origin #ModuleNotFoundError: No module named 'flask_cors' = pip install Flask-Cors
from models import db, User
import time

app = Flask(__name__)
app.config["SESSION_PERMANENT"] = True
app.config["SESSION_TYPE"] = "filesystem"
Session(app)
app.config['SECRET_KEY'] = 'cairocoders-ednalan'
app.secret_key = 'cairocoders-ednalan'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///flaskdb.db'
 
SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True
  
bcrypt = Bcrypt(app) 
CORS(app, supports_credentials=True)
db.init_app(app)
  
with app.app_context():
    db.create_all()

df = pd.read_csv("sample_data.csv")
#add df["Activity"], when we can translate activities into integers
selectedColumns = ["Skill Level", "Location Preference"]

#creates the dataFrame required for ML processing--ONLY USING TWO CHARACTERISTICS CURRENTLY (sets name to be index)
modelDF = pd.concat([df[selectedColumns[0]], df[selectedColumns[1]], df["Name"]], axis = 1)
modelDF =  modelDF.set_index("Name")

df.set_index('Name', inplace = True)

#helper method--runs the model with the given population
def runModel(newPopulation = modelDF):
    modelNP = newPopulation.to_numpy()
    clusteringModel = model.kmeanModel(len(modelDF), modelNP)
    return(clusteringModel)

#helper method--finds the cluster
def findCluster(clusteringModel, person = [[1, 1]]):
    cluster = model.determineCluster(clusteringModel, person)
    return(cluster)

#random cluster (i.e. random person generated, cluster found) on the home/default screen of the server--CAN OVERRIDE IF NECESSARY
@app.route("/", methods = ['GET'])
def randomHome():
    clusteringModel = runModel(modelDF)
    cluster = findCluster(clusteringModel)
    return(jsonify({"person" : str(cluster)}))

#gets a cluster for a specific person, based on the person inputted (i.e. /cluster/FirstName-LastName)
@app.route("/cluster/<person>", methods = ['GET'])
def get_cluster(person):
    personURL = person.split("-")
    personName = personURL[0] + " "  + personURL[1]
    personDF = modelDF.loc[personName]
    personNP = personDF.to_numpy()
    clusteringModel = runModel(modelDF)
    cluster = findCluster(clusteringModel, [personNP])
    return(jsonify({person.replace('-',' '): str(cluster)}))

#posts an entry via postman to update the global DataFrame--use postman under a format of {"FirstName LastName": [Skill Level, Location Preference]}
@app.route("/add", methods = ['POST'])
def post():
    #needs to update the overall DataFrame--must call global modelDF
    global modelDF
    postedData = request.get_data()
    dictData = json.loads(postedData)
    newPersonDF = pd.DataFrame.from_dict(dictData, orient = "index", columns= selectedColumns)
    newDF = pd.concat([modelDF, newPersonDF])
    modelDF = newDF
    #test print into the console (shows that the overall modelDF is updating)--disable later
    print(modelDF)
    return(postedData)
@app.route('/availability/<string:name>', methods=['GET'])
def groupByAvailability(name):
    name = name.replace("_", " ")
    #availability_groups = df.groupby("Availibility").agg("count").reset_index()
    common = []
    availability = df.loc[name]["Availibility"]
    def format(inp):
        inp = inp.split(",")
        inp = [x.strip() for x in inp]
        return inp
    availability = format(availability)
    for i in df.index.values:
        free = df.loc[i]["Availibility"]
        free = format(free)
        if set(free) & set(availability) and df.loc[i]["Activity"] == df.loc[name]["Activity"]:
            common.append(i)
    return jsonify(common)
@app.route('/name', methods=['GET'])
def display():
    name = session.get("user_id")
    print(session)
    name = name.replace("_", " ")
    return jsonify({name: df.loc[name].to_json()})
@app.route("/signup", methods=["POST"])
def signup():
    email = request.json["email"]
    password = request.json["password"]
 
    user_exists = User.query.filter_by(email=email).first() is not None
 
    if user_exists:
        return jsonify({"error": "Email already exists"}), 409
     
    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
 
    session["user_id"] = email
 
    return jsonify({
        "id": new_user.id,
        "email": new_user.email
    })
 
@app.route("/login", methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]
  
    user = User.query.filter_by(email=email).first()
  
    if user is None:
        return jsonify({"error": "Unauthorized Access"}), 401
  
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401
      
    session["user_id"] = "abcde@gmail.com"
    print(session)
    print(session.get("user_id"))

    time.sleep(0.5)
  
    return jsonify({
        "id": user.id,
        "email": user.email
    })
def location():
    #Changing values of location preference from single digits to miles from the union:
    # 1- Allen /LAR
    # 2- FAR/PAR
    # 3- ISR
    # 4- IKE North
    # 5- IKE South 
    # 6 - Busey Evans
    location_mapping = {
        1: (40.104340, -88.220932),
        2: (40.116089, -88.225227),
        3: (40.109810, -88.221359),
        4: (40.103590, -88.233900),
        5: (40.102112, -88.235092),
        6: (40.106499, -88.217690)
    }
    df['current location'] = df['Location Preference'].map(location_mapping)

def rem(name):
    if name in list(df.index.values):
        return df.drop(name)
    else:
        print("Name doesn't exist")
        return df
def add(name, arr):
    if len(df.iloc[0]) == len(arr):
        df.loc[name] = arr
    else:
        print("Wrong number of elements")
def update(name, col, val):
    if name in list(df.index.values):
        if col in list(df.columns) or col == "Name":
            if col == "Name":
                add(val, df.loc[name])
                return rem(name)
            else:
                df.at[name, col] = val
                return df
        else:
            print("Column doesn't exist")
            return df
    else:
        print("Name doesn't exist")
        return df
#df.to_csv("Project/sample_data.csv")
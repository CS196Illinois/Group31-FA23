import model
import pandas as pd
from sklearn.cluster import *
import numpy as np

from flask import Flask, jsonify, request, url_for, json

#creates a new flask application
app = Flask(__name__)

#reads sample data into dataframe (THIS MAY BE BUGGY--may need to cd into Project/change file path)
df = pd.read_csv("sample_data.csv")

#add df["Activity"], when we can translate activities into integers
selectedColumns = ["Skill Level", "Location Preference"]

#creates the dataFrame required for ML processing--ONLY USING TWO CHARACTERISTICS CURRENTLY (sets name to be index)
modelDF = pd.concat([df[selectedColumns[0]], df[selectedColumns[1]], df["Name"]], axis = 1)
modelDF =  modelDF.set_index("Name")

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
    return(jsonify({"person": str(cluster)}))

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
import pandas as pd 
from flask import Flask, jsonify, request
app = Flask(__name__)

df = pd.read_csv("sample_data.csv")
df.set_index('Name', inplace = True)

@app.route("/")
def hello():
    return "Hello World!"
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
@app.route('/name/<string:name>', methods=['GET'])
def display(name):
    name = name.replace("_", " ")
    return jsonify({name: df.loc[name].to_json()})
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
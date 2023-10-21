from flask import Flask, jsonify, request, url_for

app = Flask(__name__)

@app.route("/", methods = ['GET'])
def home():
    return jsonify({'key': 'value', 'key2': 'value2'})

@app.route("/<name>", methods = ['POST'])
def get_name(name):
    return jsonify({'name': name})
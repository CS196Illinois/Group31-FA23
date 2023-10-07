#edit this import statement when we determine which model we want to use
from sklearn.cluster import *

import numpy as np
import pandas as pd
import random as rand

#set up a test population to test our various clustering models, collecting data in a DataFrame and returning data in a Numpy Array for usage in scikit-learn
def testPopulation(population):
    data = []
    for i in range(population):
        charOne = rand.randint(1, 50)
        charTwo = rand.randint(1, 50)
        charThree = rand.randint(1, 50)
        d = {"Activity" : charOne, "Skill" : charTwo, "Location Preference" : charThree}
        data.append(d)
    df = pd.DataFrame(data)
    npArray = df.to_numpy()
    return(npArray)

#calculates number of clusters formulaically
def calculateClusters(population, targetValue = 25):
    clusters = 1
    while(int(population / clusters) >= targetValue):
        clusters = clusters + 1
    return(clusters)

#k-means model--utilizes minimization of inertia (how strong/standardly defined clusters are) to create clusters of equal variance (with data points to the centroid of the cluster--centroids minimizing internal cluster variance)
#pros--fast, scalable
#cons--potentially less accurate, have to specify cluster size
def kmeanModel(population, numpyData):
    clusters = calculateClusters(population)
    kmeans = KMeans(n_clusters = clusters, n_init = 100).fit(numpyData)
    return(kmeans)

#affinity propagation model--utilizes an iterative process to compare the suitability of samples to represent another sample (exemplars), until convergence on a model, resulting in clustering
#pros--accurate, complex, do not need to specify clustering size
#cons--not scalable, complex
def affinityPropModel(numpyData):
    affinityProp = AffinityPropagation().fit(numpyData)
    return(affinityProp)

#takes input of specific model (as a scikit-returned model) and a SINGULAR person (as a numpy array) to predict the particular cluster a person should be organized into
def determineCluster(model, person):
    prediction = model.predict(person)
    return(prediction[0])

#creates a random person for prediction
def randomPerson():
    charOne = rand.randint(1, 50)
    charTwo = rand.randint(1, 50)
    charThree = rand.randint(1, 50)
    return([[charOne, charTwo, charThree]])

#test code
popSize = 1000
testPop = testPopulation(popSize)
randPer = randomPerson()

print(determineCluster(kmeanModel(popSize, testPop), randPer))
print(determineCluster(affinityPropModel(testPop), randPer))
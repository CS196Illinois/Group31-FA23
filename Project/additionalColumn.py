import pandas as pd 

df = pd.read_csv("Project/sample_data.csv")

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

print(df)

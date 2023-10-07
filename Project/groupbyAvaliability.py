import pandas as pd
df = pd.read_csv("sample_data.csv")
df
#df.groupby("Availibility").agg("count").reset_index()
availability_groups = df.groupby('Availibility')['Name'].apply(list)
display(availability_groups)

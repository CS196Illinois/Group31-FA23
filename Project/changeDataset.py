import pandas as pd
df = pd.read_csv("Project/sample_data.csv")
df.set_index('Name ', inplace = True)
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
        if col in list(df.columns) or col == "Name ":
            if col == "Name ":
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
df = update("Liam Johnson", "Activity ", "Writing")
df.to_csv("Project/sample_data.csv")
print(df)

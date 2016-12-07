import pandas as pd
import numpy as np
import os
import json
import subprocess 

filename = 'MERGED2014_15_PP.csv'

def convert_zero(x):
    try:
        if (x == 0):
            return x.astype(int)
        else:
            return x
    except:
        return x

PCIPs = ["PCIP01", "PCIP03", "PCIP04", "PCIP05", "PCIP09", "PCIP10", "PCIP11", "PCIP12", "PCIP13", "PCIP14", "PCIP15", "PCIP16", "PCIP19", "PCIP22", "PCIP23", "PCIP24", "PCIP25", "PCIP26", "PCIP27", "PCIP29", "PCIP30", "PCIP31", "PCIP38", "PCIP39", "PCIP40", "PCIP41", "PCIP42", "PCIP43", "PCIP44", "PCIP45", "PCIP46", "PCIP47", "PCIP48", "PCIP49", "PCIP50", "PCIP51", "PCIP52", "PCIP54"]
columns = ['unit_id','percentage','degree_id']

raw_df = pd.read_csv(filename, sep=',', low_memory=False, encoding='utf-8-sig')


degree_percentage = pd.DataFrame(columns=columns)
for PCIP in PCIPs:
    df = raw_df.loc[:,['UNITID', PCIP]]
    df['degree_id'] = int(PCIP[4:])
    df.columns = columns
    df['percentage'] = df['percentage'].fillna(0)

    degree_percentage = degree_percentage.append(df)

degree_percentage[['degree_id', 'unit_id']] = degree_percentage[['degree_id', 'unit_id']].astype(int)
degree_percentage['percentage'] = degree_percentage['percentage'].round(4)

degree_percentage.apply(convert_zero).to_csv('output/Degree_Percentage.csv', index=False)

print('Finished')
        
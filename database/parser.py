import pandas as pd
import numpy as np
import os
import json
from pprint import pprint

tables= {}  

with open('fields.json') as data_file:    
    fields = json.load(data_file)

PCIPs = ["PCIP01", "PCIP03", "PCIP04", "PCIP05", "PCIP09", "PCIP10", "PCIP11", "PCIP12", "PCIP13", "PCIP14", "PCIP15", "PCIP16", "PCIP19", "PCIP22", "PCIP23", "PCIP24", "PCIP25", "PCIP26", "PCIP27", "PCIP29", "PCIP30", "PCIP31", "PCIP38", "PCIP39", "PCIP40", "PCIP41", "PCIP42", "PCIP43", "PCIP44", "PCIP45", "PCIP46", "PCIP47", "PCIP48", "PCIP49", "PCIP50", "PCIP51", "PCIP52", "PCIP54"]

def parse(filename):
    raw_df = pd.read_csv(filename, sep=',', low_memory=False, encoding='utf-8-sig')

    for tName in fields.keys():
        tables[tName] = raw_df.loc[:,fields[tName]]
        
    tables['degree_percentage'] = pd.DataFrame(columns=['UNITID','PCT','DEGREE_ID'])
    for PCIP in PCIPs:
        df = raw_df.loc[:,['UNITID', PCIP]]
        df['DEGREE_ID'] = PCIP[4:]
        df.columns = ['UNITID','PCT','DEGREE_ID']
        tables['degree_percentage'] = tables['degree_percentage'].append(df)
        
filename = 'MERGED2014_15_PP.csv'
parse(filename)

for tName in fields.keys():
    tables[tName].to_csv('output' + filename[-10:-7] + '/' + tName + '.csv', index=False)
tables['degree_percentage'].to_csv('output' + filename[-10:-7] + '/degree_percentage.csv', index=False)

print('Finished')
# for filename in os.listdir('.'):
#     if filename[-4:] == '.csv':
        
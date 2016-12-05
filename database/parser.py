import pandas as pd
import numpy as np
import os
import json
from pprint import pprint
with open('fields.json') as data_file:    
    fields = json.load(data_file)

tables= {}  
def parse(filename):
    raw_df = pd.read_csv(filename, sep=',', low_memory=False)

    for tName in fields.keys():
        tables[tName] = raw_df.loc[:,fields[tName]]
        
filename = 'MERGED2014_15_PP.csv'
parse(filename)

for tName in fields.keys():
    tables[tName].to_csv('output' + filename[-10:-7] + '/' + tName + '.csv', index=False)
    
# for filename in os.listdir('.'):
#     if filename[-4:] == '.csv':
        
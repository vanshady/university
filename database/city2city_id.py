import pandas as pd
import numpy as np
import os
import json
import subprocess 

filename = 'MERGED2014_15_PP.csv'

city = pd.read_csv('output/City.csv', sep=',')

city = city[['city_id', 'city_name', 'state_id']]

university = pd.read_csv('output/University.csv', sep=',', encoding='latin1')
university = university[['city','ST_FIPS']]
res = []

for index, row in university.iterrows():
    flag = False
    if index % 500 == 0:
        print(index)
    for c_index, c_row in city.iterrows():
        if row['city'] == c_row['city_name'] and row['ST_FIPS'] == c_row['state_id']:
            res.append(c_row['city_id'])
            flag = 1
            break
    if flag == False:
        print('LINE: ' + str(index))
        print(list(row))

pd.DataFrame(res, columns=["city_id"]).to_csv('city_id.csv', index=False)

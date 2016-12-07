import pandas as pd
import numpy as np
import os
import json
import subprocess 

filename = 'output/completion.csv'

columns = ['unit_id', 'percentage', 'type_id', 'less_than_4yr']

raw_df = pd.read_csv(filename, sep=',', low_memory=False, encoding='utf-8-sig')

old_types = {
    'C150_4_WHITE': {
        'type_id': 1,
        'less_than_4yr': 0
    },
    'C150_4_BLACK': {
        'type_id': 2,
        'less_than_4yr': 0
    },
    'C150_4_HISP': {
        'type_id': 3,
        'less_than_4yr': 0
    },
    'C150_4_ASIAN': {
        'type_id': 4,
        'less_than_4yr': 0
    },
    'C150_4_AIAN': {
        'type_id': 5,
        'less_than_4yr': 0
    },
    'C150_4_NHPI': {
        'type_id': 6,
        'less_than_4yr': 0
    },
    'C150_4_2MOR': {
        'type_id': 7,
        'less_than_4yr': 0
    },
    'C150_4_NRA': {
        'type_id': 8,
        'less_than_4yr': 0
    },
    'C150_4_UNKN': {
        'type_id': 9,
        'less_than_4yr': 0
    },
    'C150_L4_WHITE': {
        'type_id': 1,
        'less_than_4yr': 1
    },
    'C150_L4_BLACK': {
        'type_id': 2,
        'less_than_4yr': 1
    },
    'C150_L4_HISP': {
        'type_id': 3,
        'less_than_4yr': 1
    },
    'C150_L4_ASIAN': {
        'type_id': 4,
        'less_than_4yr': 1
    },
    'C150_L4_AIAN': {
        'type_id': 5,
        'less_than_4yr': 1
    },
    'C150_L4_NHPI': {
        'type_id': 6,
        'less_than_4yr': 1
    },
    'C150_L4_2MOR': {
        'type_id': 7,
        'less_than_4yr': 1
    },
    'C150_L4_NRA': {
        'type_id': 8,
        'less_than_4yr': 1
    },
    'C150_L4_UNKN': {
        'type_id': 9,
        'less_than_4yr': 1
    }
}

completion = pd.DataFrame(columns=columns)
for type in old_types.keys():
    df = raw_df.loc[:, ['UNITID', type]]

    df['type_id'] = old_types[type]['type_id']
    df['less_than_4yr'] = old_types[type]['less_than_4yr']
    df.columns = columns
    
    completion = completion.append(df)

completion = completion.dropna()
completion = completion.sort_values(by=['unit_id', 'type_id'])
completion[['type_id', 'unit_id']] = completion[['type_id', 'unit_id']].astype(int)
completion['percentage'] = completion['percentage'].round(4)

completion.to_csv('output/New_Completion.csv', index=False)

print('Finished')

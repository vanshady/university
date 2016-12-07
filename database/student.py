import pandas as pd
import numpy as np
import os
import json
import subprocess 

filename = 'output/student_financial.csv'

columns = ['unit_id','percentage','dependency', 'income_level']

raw_df = pd.read_csv(filename, sep=',', low_memory=False, encoding='utf-8-sig')

old_types = {
    'INC_PCT_LO': {
        'dependency': 'aided',
        'income_level': 1
    },
    'INC_PCT_M1': {
        'dependency': 'aided',
        'income_level': 2
    },
    'INC_PCT_M2': {
        'dependency': 'aided',
        'income_level': 3
    },
    'INC_PCT_H1': {
        'dependency': 'aided',
        'income_level': 4
    },
    'INC_PCT_H2': {
        'dependency': 'aided',
        'income_level': 5
    },
    'DEP_INC_PCT_LO': {
        'dependency': 'dependent',
        'income_level': 1
    },
    'DEP_INC_PCT_M1': {
        'dependency': 'dependent',
        'income_level': 2
    },
    'DEP_INC_PCT_M2': {
        'dependency': 'dependent',
        'income_level': 3
    },
    'DEP_INC_PCT_H1': {
        'dependency': 'dependent',
        'income_level': 4
    },
    'DEP_INC_PCT_H2': {
        'dependency': 'dependent',
        'income_level': 5
    },
    'IND_INC_PCT_LO': {
        'dependency': 'independent',
        'income_level': 1
    },
    'IND_INC_PCT_M1': {
        'dependency': 'independent',
        'income_level': 2
    },
    'IND_INC_PCT_M2': {
        'dependency': 'independent',
        'income_level': 3
    },
    'IND_INC_PCT_H1': {
        'dependency': 'independent',
        'income_level': 4
    },
    'IND_INC_PCT_H2': {
        'dependency': 'independent',
        'income_level': 5
    },
}

student = pd.DataFrame(columns=columns)
for type in old_types.keys():
    df = raw_df.loc[:,['unit_id', type]]
    
    df['dependency'] = old_types[type]['dependency']
    df['income_level'] = old_types[type]['income_level']
    df.columns = columns

    student = student.append(df)

student = student.dropna()
student = student.sort_values(by=['unit_id', 'dependency', 'income_level'])
student[['unit_id', 'income_level']] = student[['unit_id', 'income_level']].astype(int)
student['percentage'] = student['percentage'].round(4)

student.to_csv('output/Student.csv', index=False)

print('Finished')

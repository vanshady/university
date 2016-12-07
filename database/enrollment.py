import pandas as pd
import numpy as np
import os
import json
import subprocess 

filename = 'output/Enrollment.csv'

columns = ['unit_id','percentage','type_id']

raw_df = pd.read_csv(filename, sep=',', low_memory=False, encoding='utf-8-sig')

old_types = {
    'white': 1,
    'black': 2,
    'hispanic': 3,
    'asian': 4,
    'american_indian': 5,
    'native_hawaiian': 6,
    'hybrid': 7,
    'non-resident': 8,
    'unknown': 9,
    'total': 10,
    'men': 11,
    'women': 12
}

new_enrollment = pd.DataFrame(columns=columns)
for type in old_types.keys():
    df = raw_df.loc[:,['unit_id', type]]
    df['type_id'] = old_types[type]
    df.columns = columns

    new_enrollment = new_enrollment.append(df)

new_enrollment = new_enrollment.dropna()
new_enrollment = new_enrollment.sort_values(by=['unit_id', 'type_id'])
new_enrollment[['type_id', 'unit_id']] = new_enrollment[['type_id', 'unit_id']].astype(int)
new_enrollment['percentage'] = new_enrollment['percentage'].round(4)

new_enrollment.to_csv('output/New_Enrollment.csv', index=False)

print('Finished')

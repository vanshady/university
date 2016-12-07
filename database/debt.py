import pandas as pd
import numpy as np
import os
import json
import subprocess 

filename = 'output/Debt.csv'

columns = ['unit_id','data','type_id']

raw_df = pd.read_csv(filename, sep=',', low_memory=False)

old_types = {
   "completed": 18,
   "withdrawn": 19,
   "lo_inc": 13,
   "md_inc": 14,
   "hi_inc": 15,
   "dependent": 20,
   "independent": 21,
   "female": 12,
   "male": 11,
   "first_gen": 16,
   "not_first_gen": 17,
   "LOAN_EVER": 22
}

debt = pd.DataFrame(columns=columns)
for type in old_types.keys():
    df = raw_df.loc[:,['unit_id', type]]
    
    df['type_id'] = old_types[type]
    df.columns = columns

    debt = debt.append(df)

debt = debt.dropna()

debt = debt.sort_values(by=['unit_id', 'type_id'])
debt[['unit_id', 'type_id']] = debt[['unit_id', 'type_id']].astype(int)

debt.to_csv('output/New_Debt.csv', index=False)

print('Finished')

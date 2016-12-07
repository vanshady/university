# Database setup procedure

1. Run `python3 degree_percentage.py` which will generate degree_percentage.csv in `output`

2. Run `sed -i -e "s/,0.0,/,0,/g' output/degree_percentage.csv` in shell to replace 0.0 with 0

## Extracted Tables:

1. Admission.csv

2. Degree.csv

3. Degree_Percentage.csv

4. Family.csv

5. University.csv

6. State.csv

7. City.csv

## TODO Tables

City, State, Control, Level， Enrollment, Tuition, Completion, Completion_type, Student, Income, Debt

## TODO

1. Add zip and url to table

2. Change some of the column names (underline, not camelcase)

3. Cities in University

4. PrivacySuppressed in Family. Should we use NULL?

5. Should we use NULL or blank?

## Reminder

1. All NULL rows in Admission deleted.

2. All NULL or all PrivacySuppressed rows in Family deleted.

3. Latitude and Longitutde doesn't rely on school anymore but on city.

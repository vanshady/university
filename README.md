# University Database

## How to import data

`CREATE TABLE UNIVERSITY` in mysql

`cd database/output`

`mysql -u root UNIVERSITY < *.sql`

## Extracted Tables

1. Admission.csv

1. Degree.csv

1. Degree_Percentage.csv

1. Family.csv

1. University.csv

1. State.csv

1. City.csv

1. Control.csv

1. Level.csv

1. Tuition.csv

1. Income.csv

1. Completion_Type.csv -> Student_Type.csv

1. Enrollment.csv

1. Completion.csv

1. Debt.csv

1. Student.csv

1. Debt.csv

## Reminder

1. Latitude and Longitutde doesn't rely on school anymore but on city.

1. In Completion, year -> less_than_4yr (0 or 1)

1. Added a column `student_type` in `Income.csv`

1. Should update table names and according column names.

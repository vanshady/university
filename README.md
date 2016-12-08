# University Database

## How to import data

`CREATE TABLE UNIVERSITY` in mysql

`cd database/output`

`mysql -u root UNIVERSITY < *.sql`

## Extracted Tables

```
Admission.csv
Degree.csv
Degree_Percentage.csv
Family.csv
University.csv
State.csv
City.csv
Control.csv
Level.csv
Tuition.csv
Income.csv
Completion_Type.csv -> Student_Type.csv
Enrollment.csv
Completion.csv
Debt.csv
Student.csv
Debt.csv
```

## Reminder

1. Latitude and Longitutde doesn't rely on school any more but on city.

1. In Completion, year -> less_than_4yr (0 or 1)

1. Added a column `student_type` in `Income.csv`

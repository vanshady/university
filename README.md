# University

## Database

### How to import data

`CREATE TABLE University` in mysql

`cd database/output`

`mysql -u root UNIVERSITY < *.sql`

### Extracted Tables

```{}
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

### Reminder

1. Latitude and Longitutde doesn't rely on school any more but on city.

1. In Completion, year -> less_than_4yr (0 or 1)

1. Added a column `student_type` in `Income.csv`

### Procedures

Procedures are stored in `Procedures.sql`

## Frontend

Built with React, material-ui, and webpack.

Source code is in `frontend/`. The built published version is in another private repo.

Run `npm install` to install dependencies, `npm start` for development.

Run `npm run dist` for published version.

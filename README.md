# Database setup procedure

1. Run `python3 degree_percentage.py` which will generate degree_percentage.csv in `output`

2. Run `sed -i -e "s/,0.0,/,0,/g' output/degree_percentage.csv` in shell to replace 0.0 with 0

## Extracted Tables

1. Admission.csv

2. Degree.csv

3. Degree_Percentage.csv

4. Family.csv

5. University.csv

6. State.csv

7. City.csv

8. Control.csv

9. Level.csv

10. Tuition.csv

11. Income.csv

12. Completion_Type.csv -> Student_Type.csv

13. Enrollment.csv

14. Completion.csv (need to be parsed again)

15. Debt.csv

16. Student.csv

17. Debt.csv

## Reminder

1. All NULL rows in Admission deleted.

2. All NULL or all PrivacySuppressed rows in Family deleted.

3. Latitude and Longitutde doesn't rely on school anymore but on city.

4. In Completion, year -> less_than_4yr (0 or 1)

5. Added a column `student_type` in `Income.csv`

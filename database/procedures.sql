delimiter //
DROP PROCEDURE IF EXISTS AllNames //
CREATE PROCEDURE AllNames()
BEGIN 
IF EXISTS (SELECT name FROM University) THEN
SELECT name,unit_id FROM University ORDER BY name ASC;
END IF;
END//
delimiter ;

delimiter //
DROP PROCEDURE IF EXISTS AllSAT //
CREATE PROCEDURE AllSAT()
BEGIN 
IF EXISTS (SELECT name, sat_avg FROM University, Admission) THEN
SELECT name, Admission.sat_avg 
FROM University, Admission
WHERE University.unit_id = Admission.unit_id AND Admission.sat_avg IS NOT NULL
ORDER BY sat_avg ASC;
END IF;
END//
delimiter ;

delimiter //
DROP PROCEDURE IF EXISTS SearchName //
CREATE PROCEDURE SearchName(IN curname VARCHAR(93))
BEGIN 
IF EXISTS (SELECT * FROM University WHERE name like curname) THEN
SELECT name,unit_id,city_name FROM University,City 
WHERE name like curname AND University.city_id = City.city_id 
ORDER BY name ASC
LIMIT 10;
END IF;
END//
delimiter ;

delimiter //
DROP PROCEDURE IF EXISTS EmptySearchName //
CREATE PROCEDURE EmptySearchName()
BEGIN 
IF EXISTS (SELECT name FROM University) THEN
SELECT name,unit_id,city_name FROM University,City 
WHERE  University.city_id = City.city_id 
ORDER BY name ASC
LIMIT 10;
END IF;
END//
delimiter ;

delimiter //
DROP PROCEDURE IF EXISTS UniversityInfo //
CREATE PROCEDURE UniversityInfo(IN id INT)
BEGIN
IF EXISTS (SELECT * FROM University WHERE University.unit_id = id) THEN
SELECT * FROM University WHERE University.unit_id = id;
ELSE 
SELECT 'ERROR: University does not exist' AS 'Result';
END IF;
END//
delimiter ;

delimiter //
DROP PROCEDURE IF EXISTS UniversityAddress//
CREATE PROCEDURE UniversityAddress(IN id INT)
BEGIN
IF EXISTS (SELECT * FROM University WHERE University.unit_id = id) THEN
SELECT city_name,state_name,latitude,longitude,zip 
FROM University,City,State 
WHERE University.unit_id = id AND University.city_id = City.city_id AND City.state_id = State.state_id;
ELSE 
SELECT 'ERROR: University does not exist' AS 'Result';
END IF;
END//
delimiter ;

delimiter //
DROP PROCEDURE IF EXISTS TuitionDifference //
CREATE PROCEDURE TuitionDifference(IN id INT)
BEGIN
IF EXISTS (SELECT * FROM University WHERE University.unit_id = id) THEN
SELECT out_state-in_state AS tuition_difference
FROM Tuition
WHERE Tuition.unit_id = id;
ELSE
SELECT 'ERROR: University does not exist' AS 'Result';
END IF;
END//
delimiter ;

delimiter //
DROP PROCEDURE IF EXISTS PublicTuitionDifference //
CREATE PROCEDURE PublicTuitionDifference()
BEGIN
SELECT AVG(out_state-in_state) AS difference
FROM Tuition,University,Control
WHERE Tuition.unit_id = University.unit_id AND University.control_id = Control.control_id AND Control.detail = "public";
END//
delimiter ;

delimiter //
DROP PROCEDURE IF EXISTS TuitionExpenseDifference //
CREATE PROCEDURE TuitionExpenseDifference(IN id INT)
BEGIN
IF EXISTS (SELECT * FROM University WHERE University.unit_id = id) THEN
SELECT instructional_expenditures-out_state AS tuition_expense_difference
FROM Tuition
WHERE Tuition.unit_id = id;
ELSE
SELECT 'ERROR: University does not exist' AS 'Result';
END IF;
END//
delimiter ;

delimiter //
DROP PROCEDURE IF EXISTS PrivateTuitionExpenseDiff //
CREATE PROCEDURE PrivateTuitionExpenseDiff()
BEGIN
SELECT AVG(instructional_expenditures-in_state) AS difference
FROM Tuition,University,Control
WHERE instructional_expenditures IS NOT NULL AND in_state IS NOT NULL
AND Tuition.unit_id = University.unit_id 
AND University.control_id = Control.control_id AND Control.detail = "private nonprofit";
END//
delimiter ;

delimiter //
DROP PROCEDURE IF EXISTS CompletionRate //
CREATE PROCEDURE CompletionRate(In id INT)
BEGIN 
IF EXISTS (SELECT * FROM University WHERE University.unit_id = id) THEN
SELECT detail,percentage,less_than_4yr
FROM Completion,Student_Type
WHERE Completion.type_id = Student_Type.type_id AND Completion.unit_id = id;
ELSE
SELECT 'ERROR: University does not exist' AS 'Result';
END IF;
END//
delimiter ;

delimiter //
DROP PROCEDURE IF EXISTS AvgEnrollPercent //
CREATE PROCEDURE AvgEnrollPercent(In id INT)
BEGIN
SELECT S.detail, R.percentage
FROM Student_Type as S,(
SELECT type_id,AVG(percentage) as percentage
FROM University,Enrollment
WHERE University.control_id =id AND University.unit_id = Enrollment.unit_id
GROUP BY Enrollment.type_id) AS R
WHERE R.type_id = S.type_id
ORDER BY R.percentage DESC;
END//
delimiter ;

delimiter //
DROP PROCEDURE IF EXISTS AvgDebtValue //
CREATE PROCEDURE AvgDebtValue(In id INT)
BEGIN
SELECT S.detail, R.debt
FROM Student_Type as S,(
SELECT type_id,AVG(data) as debt
FROM University,Debt
WHERE University.control_id =id AND University.unit_id = Debt.unit_id
GROUP BY Debt.type_id) AS R
WHERE R.type_id = S.type_id
ORDER BY R.debt;
END//
delimiter ;

delimiter //
DROP PROCEDURE IF EXISTS AvgMedInc // 
CREATE PROCEDURE AvgMedInc(IN id INT)
BEGIN
SELECT AVG(med_inc) AS med_inc
FROM Family,University
WHERE Family.unit_id = University.unit_id AND University.control_id = id;
END //
delimiter ;

delimiter //
DROP PROCEDURE IF EXISTS SATHigher // 
CREATE PROCEDURE SATHigher(IN sat INT)
BEGIN
SELECT University.name,Admission.sat_avg
FROM University,Admission
WHERE University.unit_id = Admission.unit_id AND Admission.sat_avg > sat
ORDER BY sat_avg ASC;
END //
delimiter ;


delimiter //
DROP PROCEDURE IF EXISTS AllAdmissionSAT // 
CREATE PROCEDURE AllAdmissionSAT()
BEGIN
SELECT name, admission_rate,sat_avg
FROM University,Admission
WHERE University.unit_id = Admission.unit_id AND admission_rate IS NOT NULL AND sat_avg IS NOT NULL
ORDER BY admission_rate ASC, sat_avg DESC;
END //
delimiter ;

delimiter //
DROP PROCEDURE IF EXISTS UniControl // 
CREATE PROCEDURE UniControl(IN id INT)
BEGIN
SELECT name
FROM University
WHERE control_id = id;
END//
delimiter ;

delimiter //
DROP PROCEDURE IF EXISTS UniState // 
CREATE PROCEDURE UniState(IN sn VARCHAR(100))
BEGIN
SELECT name
FROM University,City,State
WHERE University.city_id = City.city_id AND City.state_id = State.state_id AND State.state_name = sn
ORDER BY name ASC;
END//
delimiter ;

delimiter //
DROP PROCEDURE IF EXISTS UniDist // 
CREATE PROCEDURE UniDist(IN uid1 INT, IN uid2 INT)
BEGIN
IF EXISTS (SELECT * FROM University WHERE University.unit_id = uid1) 
AND EXISTS (SELECT * FROM University WHERE University.unit_id = uid2) THEN
SELECT 70*SQRT(POW(R1.lat - R2.lat, 2) + POW(R1.ln - R2.ln, 2)) AS distance
FROM (SELECT C1.latitude as lat, C1.longitude as ln
FROM University AS U1, City AS C1
WHERE U1.unit_id = uid1 AND U1.city_id = C1.city_id) AS R1,
(SELECT C2.latitude as lat, C2.longitude as ln
FROM University AS U2, City AS C2
WHERE U2.unit_id = uid2 AND U2.city_id = C2.city_id) AS R2
LIMIT 1;
ELSE SELECT 'ERROR: University does not exist' AS 'Result';
END IF;
END//
delimiter ;

delimiter //
DROP PROCEDURE IF EXISTS UniDegree //
CREATE PROCEDURE UniDegree(In id INT)
BEGIN
SELECT percentage,degree_name
FROM Degree_Percentage, Degree
WHERE Degree.degree_id = Degree_Percentage.degree_id AND Degree_Percentage.unit_id = id
ORDER BY percentage DESC, degree_name ASC;
END//
delimiter ;

delimiter //
DROP PROCEDURE IF EXISTS UniRace //
CREATE PROCEDURE UniRace(In id INT)
BEGIN
IF EXISTS (SELECT * FROM University WHERE University.unit_id = id) THEN
SELECT E.percentage,S.detail
FROM Enrollment AS E,Student_Type AS S
WHERE E.unit_id = id AND E.type_id = S.type_id
ORDER BY percentage DESC;
ELSE SELECT 'ERROR: University does not exist' AS 'Result';
END IF;
END//
delimiter ;

delimiter //
DROP PROCEDURE IF EXISTS RaceRank //
CREATE PROCEDURE RaceRank(In race VARCHAR(100))
BEGIN
SELECT University.name,P.percentage
FROM University,(
SELECT E.unit_id AS unit_id,E.percentage AS percentage
FROM Enrollment AS E,(
SELECT type_id
FROM Student_Type AS S
WHERE S.detail = race) AS ST
WHERE E.type_id = ST.type_id) AS P
WHERE University.unit_id = P.unit_id
ORDER BY P.percentage DESC
LIMIT 10;
END//
delimiter ;

delimiter //
DROP PROCEDURE IF EXISTS ClosedUni //
CREATE PROCEDURE ClosedUni()
BEGIN
SELECT name
FROM University
WHERE operating = 0;
END//
delimiter ;



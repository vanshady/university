USE heroku_8a31c5b29a98ba5;
delimiter //
DROP PROCEDURE IF EXISTS AllNames //
CREATE PROCEDURE AllNames()
BEGIN 
IF EXISTS (SELECT name FROM University) THEN
SELECT name FROM University ORDER BY name ASC;
ELSE
SELECT 'ERROR: SSN does not exist' AS 'Result';
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
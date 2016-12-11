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
DROP PROCEDURE IF EXISTS SearchName //
CREATE PROCEDURE SearchName(IN curname VARCHAR(93))
BEGIN 
IF EXISTS (SELECT * FROM University WHERE name like curname) THEN
SELECT name,unit_id,city_name FROM University,City 
WHERE name like curname AND University.city_id = City.city_id 
ORDER BY name ASC;
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
delimiter //
DROP PROCEDURE IF EXISTS AllNames //
CREATE PROCEDURE ShowRawScores()
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
CREATE PROCEDURE UniversityInfo(IN curname VARCHAR(93))
BEGIN
IF EXISTS (SELECT * FROM University WHERE University.name = curname)
SELECT * FROM University WHERE University.name = curname;
ELSE 
SELECT 'ERROR: University does not exist' AS 'Result';
END IF;
END//
delimiter ;

delimiter //
DROP PROCEDURE IF EXISTS UniversityAddress(IN curname VARCHAR(93))
BEGIN
IF EXISTS (SELECT * FROM University WHERE University.name = curname)
SELECT * FROM University WHERE University.name = curname;
ELSE 
SELECT 'ERROR: University does not exist' AS 'Result';
END IF;
END//
delimiter ;
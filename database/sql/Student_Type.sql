DROP TABLE IF EXISTS Student_Type;
CREATE TABLE Student_Type (
    `type_id` VARCHAR(14) CHARACTER SET utf8,
    `detail` VARCHAR(33) CHARACTER SET utf8
);
INSERT INTO Student_Type VALUES ('1','White ');
INSERT INTO Student_Type VALUES ('2','Black ');
INSERT INTO Student_Type VALUES ('3','Hispanic ');
INSERT INTO Student_Type VALUES ('4','Asian ');
INSERT INTO Student_Type VALUES ('5','American Indian/Alaska Native ');
INSERT INTO Student_Type VALUES ('6','Native Hawaiian/Pacific Islander ');
INSERT INTO Student_Type VALUES ('7','Of Two or More Races');
INSERT INTO Student_Type VALUES ('8','Non-resident Alien ');
INSERT INTO Student_Type VALUES ('9','Unknown Race');
INSERT INTO Student_Type VALUES ('10','Total');
INSERT INTO Student_Type VALUES ('11','Male');
INSERT INTO Student_Type VALUES ('12','Female');
INSERT INTO Student_Type VALUES ('13','Low Income');
INSERT INTO Student_Type VALUES ('14','Medium Income');
INSERT INTO Student_Type VALUES ('15','High Income');
INSERT INTO Student_Type VALUES ('16','First Generation');
INSERT INTO Student_Type VALUES ('17','Not First Generation');
INSERT INTO Student_Type VALUES ('18','Completed');
INSERT INTO Student_Type VALUES ('19','Withdrawn');
INSERT INTO Student_Type VALUES ('20','Dependent');
INSERT INTO Student_Type VALUES ('21','Independent');
INSERT INTO Student_Type VALUES ('22','Loaned');

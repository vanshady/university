USE heroku_8a31c5b29a98ba5;
DROP TABLE IF EXISTS Income;
CREATE TABLE Income (
    `income_level` INT,
    `detail` VARCHAR(24) CHARACTER SET utf8,
    `student_type` INT
);
INSERT INTO Income VALUES (1,'between $0-30,000',13);
INSERT INTO Income VALUES (2,'between $30,001-$48,000',14);
INSERT INTO Income VALUES (3,'between $48,001-$75,000',14);
INSERT INTO Income VALUES (4,'between $75,001-$110,000',15);
INSERT INTO Income VALUES (5,'$110,001+',15);

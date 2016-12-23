DROP DATABASE IF EXISTS UNIVERSITY;
CREATE DATABASE UNIVERSITY;
USE UNIVERSITY;

CREATE TABLE Student_Type (
    `type_id` INT PRIMARY KEY,
    `detail` VARCHAR(33) CHARACTER SET utf8
);

CREATE TABLE Control (
    `control_id` INT PRIMARY KEY,
    `detail` VARCHAR(18) CHARACTER SET utf8
);

CREATE TABLE State (
    `state_id` INT PRIMARY KEY,
    `state_name` VARCHAR(30) CHARACTER SET utf8,
    `postcode` VARCHAR(2) CHARACTER SET utf8
);

CREATE TABLE Income (
    `income_level` INT PRIMARY KEY,
    `detail` VARCHAR(24) CHARACTER SET utf8,
    `student_type` INT,
    FOREIGN KEY(student_type) REFERENCES Student_Type(type_id)
);

CREATE TABLE City (
    `city_id` INT PRIMARY KEY,
    `city_name` VARCHAR(24) CHARACTER SET utf8,
    `state_id` INT,
    `region_id` INT,
    `latitude` NUMERIC(9, 7),
    `longitude` NUMERIC(10, 7),
    FOREIGN KEY(state_id) REFERENCES State(state_id)
);

CREATE TABLE Level (
    `level_id` INT PRIMARY KEY,
    `detail` VARCHAR(16) CHARACTER SET utf8
);

CREATE TABLE University (
    `unit_id` INT PRIMARY KEY,
    `name` VARCHAR(93) CHARACTER SET utf8,
    `city_id` INT,
    `zip` VARCHAR(10) CHARACTER SET utf8,
    `url` VARCHAR(124) CHARACTER SET utf8,
    `main_campus` BOOL,
    `num_branches` INT,
    `control_id` INT,
    `historically_black` BOOL,
    `predominantly_black` BOOL,
    `men_only` BOOL,
    `women_only` BOOL,
    `alias` VARCHAR(680) CHARACTER SET utf8,
    `level_id` INT,
    `operating` BOOL,
    FOREIGN KEY(city_id) REFERENCES City(city_id),
    FOREIGN KEY(control_id) REFERENCES Control(control_id),
    FOREIGN KEY(level_id) REFERENCES Level(level_id)
);

CREATE TABLE Admission (
    `unit_id` INT PRIMARY KEY,
    `admission_rate` NUMERIC(5, 4),
    `vr25` INT, `vr50` INT, `vr75` INT,`mt25` INT,`mt50` INT,`mt75` INT, `wr25` INT, `wr50` INT,
    `wr75` INT, `sat_avg` INT,
    FOREIGN KEY(unit_id) REFERENCES University(unit_id)
);

CREATE TABLE Completion (
    `unit_id` INT,
    `percentage` NUMERIC(5, 4),
    `type_id` INT,
    `less_than_4yr` INT,
    FOREIGN KEY(unit_id) REFERENCES University(unit_id)
);

CREATE TABLE Debt (
    `unit_id` INT,
    `data` NUMERIC(25, 19),
    `type_id` INT,
    FOREIGN KEY(unit_id) REFERENCES University(unit_id),
    FOREIGN KEY(type_id) REFERENCES Student_Type(type_id)
);

CREATE TABLE Degree (
    `degree_id` INT PRIMARY KEY,
    `degree_name` VARCHAR(80) CHARACTER SET utf8
);

CREATE TABLE Degree_Percentage (
    `unit_id` INT,
    `percentage` NUMERIC(5, 4),
    `degree_id` INT,
    FOREIGN KEY(unit_id) REFERENCES University(unit_id),
    FOREIGN KEY(degree_id) REFERENCES Degree(degree_id)
);

CREATE TABLE Enrollment (
    `unit_id` INT,
    `percentage` NUMERIC(10, 4),
    `type_id` INT,
    FOREIGN KEY(unit_id) REFERENCES University(unit_id),
    FOREIGN KEY(type_id) REFERENCES Student_Type(type_id)
);

CREATE TABLE Family (
    `unit_id` INT PRIMARY KEY,
    `par_ed_hs` NUMERIC(10, 9),
    `par_ed_ps` NUMERIC(10, 9),
    `avg_inc` NUMERIC(13, 7),
    `med_inc` NUMERIC(13, 7),
    `avg_inc_dep` NUMERIC(12, 6),
    `avg_inc_ind` NUMERIC(13, 8),
    FOREIGN KEY(unit_id) REFERENCES University(unit_id)
);

CREATE TABLE Student (
    `unit_id` INT,
    `percentage` NUMERIC(11, 10),
    `dependency` VARCHAR(11) CHARACTER SET utf8,
    `income_level` INT,
    FOREIGN KEY(unit_id) REFERENCES University(unit_id),
    FOREIGN KEY(income_level) REFERENCES Income(income_level)
);

CREATE TABLE Tuition (
    `unit_id` INT PRIMARY KEY,
    `in_state` INT,
    `out_state` INT,
    `net` INT,
    `instructional_expenditures` INT,
    FOREIGN KEY(unit_id) REFERENCES University(unit_id)
);

source sql/Student_Type.sql;
source sql/Control.sql;
source sql/State.sql;
source sql/Income.sql;
source sql/City.sql;
source sql/Level.sql;
source sql/University.sql;
source sql/Admission.sql;
source sql/Completion.sql;
source sql/Debt.sql;
source sql/Degree.sql;
source sql/Degree_Percentage.sql;
source sql/Enrollment.sql;
source sql/Family.sql;
source sql/Student.sql;
source sql/Tuition.sql;
source procedures.sql;

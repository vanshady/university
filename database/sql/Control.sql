DROP TABLE IF EXISTS Control;
CREATE TABLE Control (
    `control_id` INT,
    `detail` VARCHAR(18) CHARACTER SET utf8
);
INSERT INTO Control VALUES (1,'Public');
INSERT INTO Control VALUES (2,'Private nonprofit');
INSERT INTO Control VALUES (3,'Private for-profit');

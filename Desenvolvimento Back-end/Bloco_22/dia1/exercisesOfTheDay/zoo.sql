-- 1. A zoo needs a database to store datas about your animals. The datas to be stored about each animal is:
-- Name;
-- Species;
-- Gender;
-- Age;
-- Location;

-- Each animal also it has many caregivers, and each caregiver can be responsible for more than 1 animal.
-- Besides, each caregiver it has a manager, being that each manager can be responsible for more than 1
-- caregiver.
-- Follow the steps learned today to model this database.

DROP SCHEMA IF EXISTS Zoo;
CREATE SCHEMA Zoo;
USE Zoo;

CREATE TABLE Species(
	specie_id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    specie VARCHAR(40) NOT NULL
);

CREATE TABLE Location(
	location_id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    location VARCHAR(60) NOT NULL
);

CREATE TABLE Gender(
	gender_id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    gender VARCHAR(10) NOT NULL
);

CREATE TABLE Manager(
	manager_id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    manager_name VARCHAR(50) NOT NULL
);

CREATE TABLE Caregivers(
	caregiver_id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    caregiver_name VARCHAR(50) NOT NULL,
    manager_id INTEGER,
    FOREIGN KEY (manager_id) REFERENCES Manager (manager_id)
);

CREATE TABLE Animals(
	animal_id INT(10) NOT NULL AUTO_INCREMENT,
    animal_name VARCHAR(50) NOT NULL,
    AGE INTEGER,
    gender_id INTEGER,
    specie_id INTEGER,
    location_id INTEGER,
    CONSTRAINT PRIMARY KEY (animal_id, gender_id, specie_id, location_id),
    FOREIGN KEY (gender_id) REFERENCES Gender (gender_id),
    FOREIGN KEY (specie_id) REFERENCES Species (specie_id),
    FOREIGN KEY (location_id) REFERENCES Location (location_id)
);

CREATE TABLE Animals_caregivers(
	animal_id INTEGER,
    caregiver_id INTEGER,
    CONSTRAINT PRIMARY KEY(animal_id, caregiver_id),
    FOREIGN KEY (animal_id) REFERENCES Animals (animal_id),
    FOREIGN KEY (caregiver_id) REFERENCES Caregivers (caregiver_id)
);

DROP TABLE Animals;
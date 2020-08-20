###
Schema

CREATE DATABASE birds_db;
USE birds_db;

CREATE TABLE birds
(
    id int NOT NULL
    AUTO_INCREMENT,
	name VARCHAR
    (255) NOT NULL,
	location VARCHAR
    (255) NOT NULL,
	PRIMARY KEY
    (id)
);
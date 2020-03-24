-- sudo -u <userWithDatabaseAccess> psql -U <databaseUser> -a -f setup.sql

-- drop database
-- create database
-- change to created database
-- create tables
-- insert data into created tables
-- commit commands
DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;
\c testdb
CREATE TABLE users (oprid varchar, firstName varchar, lastName varchar, age int);
CREATE TABLE apiUsage (oprid varchar NOT NULL, apiPath varchar NOT NULL, params json NOT NULL, createTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);
INSERT INTO users VALUES ('DJRIBEIRO', 'David', 'Ribeiro', 28);
INSERT INTO users VALUES ('BMEREL', 'Brian', 'Merel', 26);
COMMIT;

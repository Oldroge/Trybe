-- Create a database with the especify name
CREATE DATABASE data_base_name;

-- synonyms of the CREATE DATABASE, also create a database
CREATE SCHEMA data_base_name;

-- Verify if the database doesn't exist yet;
-- This verification is commonly used together the CREATE DATABASE to avoid;
-- the attempt create a double databasem which would cause ann error;
IF NOT EXISTS data_base_name;

-- List all exists databases;
SHOW DATABASES;

-- Define the actives database to use in the moment;
USE nome_do_banco_de_dados;
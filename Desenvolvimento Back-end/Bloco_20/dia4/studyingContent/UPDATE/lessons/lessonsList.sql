SET SQL_SAFE_UPDATES = 0;

-- Lesson 1: Update the first name of the all table people sakila.actor that have the first name 'JULIA' to 'JULES';
UPDATE actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';
-- SELECT * FROM actor;
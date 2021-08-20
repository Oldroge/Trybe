SELECT * FROM sakila.actor;
SELECT CONCAT (first_name, last_name) FROM sakila.actor;
-- The name return all name together
 
SELECT CONCAT (first_name, ' ', last_name) FROM sakila.actor;
-- With the ' ' the name return with a space between first name and last name

SELECT CONCAT (first_name, ' ', last_name) AS 'full name' FROM sakila.actor; 
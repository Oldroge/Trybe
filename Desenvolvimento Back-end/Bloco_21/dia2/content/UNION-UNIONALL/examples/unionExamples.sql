-- Sintax UNION and UNION ALL;
USE sakila;
SELECT first_name, last_name FROM actor
UNION ALL
SELECT first_name, last_name FROM customer;

-- The diference between UNION and UNION ALL is that the UNION ignore repeated values and the UNION ALL dont;
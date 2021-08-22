-- Lesson 1: We need identify the customer datas with the e-mail: 'LEONARD.SCHOFIELD@sakilacustomer.org';
USE sakila;
SELECT * FROM customer WHERE email='LEONARD.SCHOFIELD@sakilacustomer.org';


-- Lesson 2: We need a client names report, in alphatic order, that dont are active in our system and belong
-- the store with Id = 2, and dont includs the Kenneth customer in the result;
SELECT * FROM customer WHERE active = 0 AND store_id = 2 ORDER BY first_name <> 'Kenneth';

-- The financial sector wants to know title, description, release year and replacement cost, from the 100 movies
-- with the biggest replacement cost, the biggest value to the lowest, where the movies made to underage
-- and have the replacement minimum cost of $18,00 dollars. Case draw, order in alphatic order by title;
SELECT title, description, release_year, replacement_cost FROM film
WHERE rating <> 'NC-17' AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC LIMIT 100;

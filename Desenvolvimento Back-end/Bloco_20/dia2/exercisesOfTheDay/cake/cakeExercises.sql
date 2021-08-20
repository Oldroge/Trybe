-- To the follow exercises, we going to use tha sakila.actor table

-- Exercise 1: Write a query that display only the single lastnames registered
SELECT last_name FROM sakila.actor;

-- Exercise 2: How many single lastnames we have in the table?
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
-- Answer: 121

-- Exercise 3: Order the values in the table by lastnames ascending order and firstname order decreasing order
SELECT * FROM sakila.actor ORDER BY last_name ASC, first_name DESC;

-- Go to the sakila.language table and create a research that display the 5 registered languages, but dont 
-- display the english.
SELECT * FROM sakila.language LIMIT 5 OFFSET 1;

--  Go to the film table and select all table datas. 
SELECT * FROM sakila.film;

-- Now lets try to do it: create a query to find the 20 first movies, includes title, realese year,  
-- rental duration, parental rating and replacement cost. Order the results by the movies with de biggest
-- rental duration and at the lowest replacement cost:
SELECT title, release_year, rental_duration, rental_rate, replacement_cost FROM sakila.film
ORDER BY rental_duration DESC, replacement_cost ASC
LIMIT 20;


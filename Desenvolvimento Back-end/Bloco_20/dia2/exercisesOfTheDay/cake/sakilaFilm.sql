-- To the next exercises, we going to use the sakila.form table

-- Exercise 1: Write a query that display all registered movies in the database
SELECT * FROM sakila.film;

-- Exercise 2: Write a query that display the movie names, release year and rating
SELECT title, release_year, rating FROM sakila.film;

-- Exercise 3: How many movies we have registered?

SELECT COUNT(*) FROM sakila.film;

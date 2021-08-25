-- How can we build a GROUP BY sintax?
-- SELECT column(s) FROM table
-- GROUP BY column(s);

-- Using in practice:
SELECT first_name FROM sakila.actor
GROUP BY first_name; 

-- Case need to know how many first_name have in the table:
SELECT first_name, COUNT(*) AS number_of_names FROM sakila.actor
GROUP BY first_name;

-- Duration average of filmes grouped by rating;
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Minimum value of replacement from the movies grouped by rating;
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Maximum value of replacement from the movies grouped by rating;
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Replacement total cost of movies grouped by rating;
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP BY rating;
-- Studying about strings manipulate;
USE sakila;
-- Convert to uppercase
SELECT UCASE(title) FROM sakila.film LIMIT 10;

-- Convert to lowercase
SELECT LCASE(title) FROM sakila.film LIMIT 10;

-- Replace the current substring to a new substring;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film;

-- Return a column with a new length required from left to right;
SELECT LEFT(title, 9) FROM sakila.film WHERE film_id = 1;

-- Return a column with a new length required from right to left;
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;

-- Return the length;
SELECT LENGTH(title) FROM sakila.film WHERE film_id = 1;

-- Return part of the string according to the index of a character and the character quantity extracts;
SELECT SUBSTRING(title, 1, 2) FROM sakila.film WHERE film_id = 1;

-- If the character quantity to extract were undefined, then will be extract by default index into the final;
SELECT SUBSTRING(title, 2) FROM sakila.film WHERE film_id = 1;

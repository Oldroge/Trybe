-- Lesson 1: Using the IF in the table sakila.film, display the film id, the title and a extra column
-- called 'conheço o filme?', that should rate whether the film name is 'ACE GOLDFINGER'. Case true, 
-- display "Já assisti a esse filme". Otherwise, display "Não conheço o filme". Don't forget to use an alias
-- to rename the conditional column;
USE sakila;
SELECT film_id, title,
	IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') AS know_or_not
FROM film;

-- Lesson 2: Using CASE in the sakila.film table, display the title,
-- the rating ( rating ) and an extra column we'll call 'target audience',
-- where we'll rate the movie according to the following acronyms:
-- G: "Free for all";
-- PG: "Not recommended for children under 10";
-- PG-13: "Not recommended for children under 13";
-- A: "Not recommended for children under 17";
-- If it does not fall into any of the above classifications: "No minors".

SELECT title, rating,
	CASE 
		WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'ão recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
	END AS publico_alvo
FROM film;


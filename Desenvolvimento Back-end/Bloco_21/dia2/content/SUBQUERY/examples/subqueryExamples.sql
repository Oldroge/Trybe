-- Using a SUBQUERY as a data font for the FROM;
SELECT f.title, f.rating, f.release_year
FROM (
    SELECT *
    FROM sakila.film
    WHERE rating = 'PG'
) AS f;
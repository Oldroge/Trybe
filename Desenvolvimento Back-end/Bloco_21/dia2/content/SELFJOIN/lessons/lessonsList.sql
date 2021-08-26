-- Lesson 1: We want to know the ids and the replacement cost from the movies that have the same replacement cost;
SELECT * FROM film;
SELECT t1.film_id, t1.replacement_cost, t2.film_id, t2.replacement_cost
FROM film AS t1, film AS t2
WHERE t1.replacement_cost = t2.replacement_cost;

-- Lesson 2: Display the title and the rental duration from the movies that have the same duration.
-- Display only the movies with the rental duration between 2 and 4 days;
SELECT t1.title, t1.rental_duration, t2.title, t2.rental_duration
FROM film AS t1, film AS t2
WHERE t1.rental_duration = t2.rental_duration
HAVING t1.rental_duration BETWEEN 2 AND 4;

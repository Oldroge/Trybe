-- Lesson 1: Assemble a query that display the customers quantity registered in the table sakila.customer
-- that are actives and the quantity that are inactive;
SELECT IF(active = 1, 'active', 'Inactive') AS ActiveOrInactive,
COUNT(customer_id) AS Quantity
FROM sakila.customer
GROUP BY active;

-- Lesson 2: Assemble a query for the table sakila.customer that display the active customer quantity and
-- inactive by store. The results should have the store_id, customer status (active or inactive) and the 
-- customer quantity by status;
SELECT store_id, active, COUNT(*) AS Quantity
FROM sakila.customer
GROUP BY store_id, active;

-- Lesson 3: Assemble a query that display average rent duration by film rating registered in the table sakila.film
-- The results should be grouped by rating and bigger average rank for minor;
SELECT AVG(rental_duration) AS average_rental_duration, rating
FROM sakila.film
GROUP BY rating
ORDER BY average_rental_duration DESC;

-- Lesson 4: Assemble a query for the table sakila.address that display the district name and address quantity
-- resgitered it. The results should be ordered from the biggest quantity to the lowest;
SELECT district, COUNT(address) AS Address_number
FROM sakila.address
GROUP BY district
ORDER BY Address_number DESC;

-- EXERCISES ABOUT HAVING:
-- Lesson 1: Using the follow query, display only average durations that are between 115.0 to 121.50.
-- In addition, give an alias (nickname) to generated column to AVG(length), so that makes the
-- query readeble. Finish ordered the results by decreasing form;
    SELECT rating, AVG(length) AS average_durantion
    FROM sakila.film
    GROUP BY rating
    HAVING average_durantion
    BETWEEN 115.0 AND 121.50
    ORDER BY average_durantion DESC;

-- Lesson 2: Using the follow query, display only the replacement cost values that are over of $3950.50.
-- Give an alias that makes sense for SUM(replacement_cost), so that makes the query readeble.
-- Finish ordering the results by crescent form;
    SELECT rating, SUM(replacement_cost) AS expensive_rep_cost
    FROM sakila.film
    GROUP by rating
    HAVING expensive_rep_cost > 3950.50
    ORDER BY expensive_rep_cost ASC;




-- Lesson 1: Assemble a query that display the actor id, actor name, and the film id where he already 
-- acted using the tables actor and film_actor;
USE sakila;
SELECT actor.actor_id, actor.first_name, actor.last_name, film_actor.film_id
FROM actor AS actor
INNER JOIN film_actor AS film_actor
ON actor.actor_id = film_actor.actor_id;

-- Lesson 2: Use the JOIN to display the name, last name and address of each one bank employees.
-- Use the staff and address tables;
SELECT staff.first_name, staff.last_name, address.address
FROM staff AS staff
INNER JOIN address AS address
ON staff.address_id = address.address_id;

-- Lesson 3: Display the customer_id, name and e-mail from the 100 first customers, ordered by 
-- name in decreasing order together the address id and the street name where the customer lives. These
-- informations could be found in the customer and address tables;
SELECT customer.customer_id,
		customer.first_name,
        customer.last_name,
        customer.email,
        address.address_id,
        address.address
FROM customer AS customer
INNER JOIN address AS address
ON customer.address_id = address.address_id
ORDER BY first_name DESC
LIMIT 100;

-- Lesson 4: Display the name, email, address id, address and district from the clients that lives in the
-- California and have 'rene' in your names. The informations can be found in the address and customer tables;
SELECT customer.first_name,
		customer.last_name,
        customer.email,
        customer.address_id,
        address.address,
        address.district
FROM customer AS customer
INNER JOIN address AS address
ON customer.address_id = address.address_id
WHERE address.district = 'California'
AND first_name LIKE '%rene%';

-- Lesson 5: Display the name and the customers address quantity. Order your results by decreasing form names
-- Display only the active customers. The informations can be found in the address and customer table;
SELECT customer.first_name,
		customer.last_name,
        address.address
FROM customer AS customer
INNER JOIN address AS address
ON customer.address_id = address.address_id
WHERE customer.active = 1
ORDER BY first_name DESC;

-- Lesson 6: Assemble a query that display the name, last name and value average (amount) pay to the empployees
-- in the year 2006. Use the payment and staff tables. The results should be grouped by employee name
-- and last name;
SELECT staff.first_name,
		staff.last_name,
        AVG(payment.amount)
FROM staff AS staff
INNER JOIN payment AS payment
ON staff.staff_id = payment.staff_id
WHERE YEAR (payment.payment_date) = 2006
GROUP BY staff.first_name, staff.last_name;

-- Lesson 7: Assemble a query that display actor id, name, film id e film title using the actor, film_actor and
-- film tables. TIP: you will need make more than one JOIN in the same query;
SELECT actor.actor_id,
		actor.first_name,
        actor.last_name,
        film_actor.film_id,
        film.title
FROM actor AS actor
INNER JOIN film_actor AS film_actor
ON actor.actor_id = film_actor.actor_id
INNER JOIN film AS film
ON film.film_id = film_actor.film_id;

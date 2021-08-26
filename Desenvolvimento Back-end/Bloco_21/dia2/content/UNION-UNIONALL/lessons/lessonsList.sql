-- Lesson 1: All the employees were promoted to actors. Assemble a query that display the union table staff
-- with the actor table, displaying only the name and the lastname. Your results shouldn't delete neither 
-- employees to union the tables;
USE sakila;
SELECT * FROM staff;
SELECT first_name, last_name FROM staff
UNION ALL
SELECT first_name, last_name FROM actor;

-- Lesson 2: Assemble a query that unites the table results customer and actor, displaying the names
-- that have the word "tracy" in the table customer and those that contain "je" in the actor table. Display 
-- only the single results;
SELECT first_name FROM customer
WHERE first_name LIKE '%tracy%'
UNION
SELECT first_name FROM actor
WHERE first_name LIKE '%je%';

-- Lesson 3: Assemble a query that display the union from the five last table names actor, the first name in
-- the table staff and five names from the 15ª position of the table customer. Dont allow that repeated datas
-- been displayed. Order the results in alphatic order;
(SELECT first_name FROM actor
ORDER BY actor_id DESC
LIMIT 5)
UNION
(SELECT first_name FROM staff
ORDER BY staff_id ASC
LIMIT 1)
UNION
(SELECT first_name FROM customer
LIMIT 5 OFFSET 15)
ORDER BY first_name ASC;

-- Lesson 4: You want display a paged list with the names and last names of all customers and actors from the
-- database, in aphatic order. Consider that the pagination is been done of 15 in 15 results that you're in
-- 4ª page. Assemble a query that simulate this scenary;
(SELECT first_name, last_name FROM customer
LIMIT 60)
UNION ALL
(SELECT first_name, last_name FROM actor
LIMIT 60)
ORDER BY first_name,
last_name LIMIT 15 OFFSET 45;
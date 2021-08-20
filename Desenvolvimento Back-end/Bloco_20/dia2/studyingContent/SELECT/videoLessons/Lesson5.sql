-- Lesson 5: Use the SELECT to explore all tables on the database;

USE sakila;
SELECT * FROM actor;
SELECT city, last_update FROM city;
SELECT title, description, rental_duration FROM film;
SELECT name FROM language;
SELECT manager_staff_id, address_id FROM store;
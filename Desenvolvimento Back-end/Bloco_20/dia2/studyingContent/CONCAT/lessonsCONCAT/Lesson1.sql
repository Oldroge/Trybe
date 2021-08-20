-- Lesson 1: In the table sakila.film, mount a query that show the title and release year from the movies 
-- in a column and give it the name 'release movie';

USE sakila;
SELECT title, release_year FROM film;
SELECT CONCAT (title, ' ', release_year) AS release_movie FROM film;

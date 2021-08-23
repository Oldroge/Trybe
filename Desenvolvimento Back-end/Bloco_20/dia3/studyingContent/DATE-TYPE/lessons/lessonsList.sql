-- Lesson 1: How much payments we have with the return date 2005-05-25? There are multiples possible ways 
-- to find this answer;
USE sakila;
SELECT count(payment_date) FROM payment
WHERE DATE(payment_date) = '2005-05-25';

-- Lesson 2: How much payments were done between 2005-07-01 and 2005-08-22?
SELECT COUNT(payment_date) FROM payment
WHERE DATE(payment_date) BETWEEN
'2005-07-01' AND '2005-08-22';

-- Lesson 3: Using the rental table, extract date, year, month, day, hour, minute and second from records 
-- with rental_id = 10330. Use the rental_date column to extract the informations;
SELECT DATE(rental_date) AS Data,
YEAR(rental_date) AS Ano,
MONTH(rental_date) AS Mes,
DAY(rental_date) AS Dia,
HOUR(rental_date) AS Hora,
MINUTE(rental_date) AS Minuto,
SECOND(rental_date) AS Segundo
FROM rental WHERE rental_id = 10330;

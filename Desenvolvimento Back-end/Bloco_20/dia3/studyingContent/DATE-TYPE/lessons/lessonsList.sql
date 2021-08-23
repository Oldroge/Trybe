-- Lesson 1: How much payments we have with the return date 2005-05-25? There are multiples possible ways 
-- to find this answer;
USE sakila;
SELECT count(payment_date) FROM payment
WHERE DATE(payment_date) = '2005-05-25';

-- Lesson 2: How much payments were done between 2005-07-01 and 2005-08-22?
SELECT COUNT(payment_date) FROM payment
WHERE DATE(payment_date) BETWEEN
'2005-07-01' AND '2005-08-22';

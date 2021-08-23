-- Lesson 1: How much payments we have with the return date 2005-05-25? There are multiples possible ways 
-- to find this answer;
SELECT count(payment_date) FROM sakila.payment
WHERE DATE(payment_date) = '2005-05-25';

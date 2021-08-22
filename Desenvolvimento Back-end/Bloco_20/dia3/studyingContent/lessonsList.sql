-- Lesson 1: We need identify the customer datas with the e-mail: 'LEONARD.SCHOFIELD@sakilacustomer.org';
USE sakila;
SELECT * FROM customer WHERE email='LEONARD.SCHOFIELD@sakilacustomer.org';


-- Lesson 2: We need a client names report, in alphatic order, that dont are active in our system and belong
-- the store with Id = 2, and dont includs the Kenneth customer in the result;
SELECT * FROM customer WHERE active = 0 AND store_id = 2 ORDER BY first_name <> 'Kenneth';

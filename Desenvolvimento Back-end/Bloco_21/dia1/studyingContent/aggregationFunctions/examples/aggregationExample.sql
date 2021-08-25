-- Using the aggregation functions: AVG, MIN, MAX, SUM e COUNT;
SELECT AVG(replacement_cost) FROM sakila.film; -- 19.984000 (Average between all records)
SELECT MIN(replacement_cost) FROM sakila.film; -- 9.99 (Lower value found)
SELECT MAX(replacement_cost) FROM sakila.film; -- 29.99 (Bigger value found)
SELECT SUM(replacement_cost) FROM sakila.film; -- 19984.00 (Sum of all records)
SELECT COUNT(replacement_cost) FROM sakila.film; -- 1000 records found (Quantity)
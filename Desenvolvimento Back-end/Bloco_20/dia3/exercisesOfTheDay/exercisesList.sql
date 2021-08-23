-- Exercise 1: Write a query to display all pieces that start with GR;
SELECT name FROM Pecas WHERE name like 'GR%';

-- Exercise 2: Write a query to display all supplies that contains piece with code 2. Organize the result
-- by provider alphatic order;
SELECT * FROM Fornecimentos 
WHERE code = 2 ORDER BY Fornecedor;
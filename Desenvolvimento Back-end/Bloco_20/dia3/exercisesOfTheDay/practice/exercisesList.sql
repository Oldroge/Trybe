-- Exercise 1: Write a query to display all pieces that start with GR;
SELECT name FROM Pecas WHERE name like 'GR%';

-- Exercise 2: Write a query to display all supplies that contains piece with code 2. Organize the result
-- by provider alphatic order;
SELECT * FROM Fornecimentos 
WHERE code = 2 ORDER BY Fornecedor;

-- Exercise 3: Write a query to display the pieces, price and providers for all supplies that the provider code
-- have the letter N;
SELECT peca, Preco, Fornecedor FROM Fornecimentos
WHERE Fornecedor LIKE '%N%';

-- Exercise 4: Write a query to display all informations from providers that are limited employer (LTDA).
-- Order the results in alphatic order decreasing;
SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA';

-- Exercise 5: Write a query to display all emplyer numbers (providers) that contains the letter F in the code;
SELECT COUNT(*) FROM Fornecedores
WHERE code LIKE '%F%';

-- Exercise 6: Write a query to display the supplies where the pieces cost more than R$15,00 and less than
-- R$40,00. Order the results by ascending order;
SELECT * FROM Fornecimentos
WHERE Preco BETWEEN '15.00' AND '40.00';

-- Exercise 7: Write a query to display the sales number done between the dates 2018-04-15 and 2019-07-30;
SELECT COUNT(*) FROM Vendas
WHERE DATE(order_date) BETWEEN '20018-04-15' AND '2019-07-30';
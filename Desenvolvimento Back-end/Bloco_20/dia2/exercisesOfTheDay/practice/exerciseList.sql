-- Exercise 1: Write a query to display string "This is SQL Exercise, Practice and Solution";
SELECT 'This is SQL Exercise, Practice and Solution';

-- Exercise 2: Write a query to display three numbers and three columns;
SELECT 1 AS First_number, 2 AS second_number, 3 AS third_number;

-- Exercise 3: Write a query to display the numbers sum 10 and 15;
SELECT 10 + 15;
-- Answer: 25;

-- Exercise 4: Wirte a query to display any arithmetic expression result;
SELECT 10 + 18 * 37 / 42;

-- Exercise 5: Write a query to display informations from all scientists;
USE Scientists;
SELECT * FROM Scientists;

-- Exercise 6: Write a query to display the each name as "Nome do projeto" and the hours as "Tempo de Trabalho";
 SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;

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

-- Exercise 6: Write a query to display each name as "Nome do projeto" and the hours as "Tempo de Trabalho";
 SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;

-- Exercise 7: Write a query to display the scientist names in alphatic order;
SELECT * FROM Scientists ORDER BY Name ASC;

-- Exercise 8: Write a query to display the Projects name in alphatic order;
SELECT * FROM Projects ORDER BY Name ASC;

-- Exercise 9: Write a query that display the string "O projeto Name precisou de Hours horas para ser
-- concluído." to each project;
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' para ser concluído.') FROM Projects;

-- Exercise 10: Write a query to display the name and hours of the three projects with the most hours;
SELECT name, hours FROM Projects ORDER BY hours DESC LIMIT 3;

-- Exercise 11: Write a query to display code from all table projects AssignedTo without being repeated;
SELECT DISTINCT Project FROM AssignedTo;

-- Exercise 12: Write a query to display the project name with bigger hours quantity;
SELECT name, hours FROM Projects ORDER BY hours LIMIT 1;

-- Exercise 13: Write a query to display the second project name with the smallest hours quantity;
SELECT name, hours FROM Projects ORDER BY hours LIMIT 1 OFFSET 1;

-- Exercise 14: Write a query to display all informations from five projects with the smallest horus quantity;
SELECT * FROM Projects ORDER BY hours LIMIT 5;

-- Exercise 15: Write a query that displays the string 'Existem 'Number' cientistas na tabela Scientists', that
-- Number refer the scientist quantity.
USE Scientists;
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists') FROM Scientists;

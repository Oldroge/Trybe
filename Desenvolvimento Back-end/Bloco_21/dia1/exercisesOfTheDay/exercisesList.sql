-- Exercise 1: Write a query that display the biggest table salary;
USE hr;
SELECT MAX(SALARY) FROM employees; -- 24000.00

-- Exercise 2: Write a query that display the difference between the biggest and the lowest salary;
SELECT MAX(SALARY) - MIN(SALARY) FROM employees; -- 21900.00

-- Exercise 3: Write a query that display the average salary of each JOB_ID, ordering by average salary in
-- descreasing order;
SELECT JOB_ID, AVG(SALARY) FROM employees
GROUP BY JOB_ID 
ORDER BY JOB_ID DESC;

-- Exercise 4: Write a query that display the money quantity necessary to make the payment of all people
-- employees;
SELECT SUM(SALARY) FROM employees; -- 691400.00

-- Exercise 5: Write a query that display four informations: the biggest salary, the lowest salary, the sum of
-- all fees and the average salary.
-- All the values should be formated to have only two decimal places;
SELECT ROUND(MAX(SALARY), 2) AS BIGGEST_SALARY,
ROUND(MIN(SALARY), 2) AS LOWEST_SALARY,
ROUND(SUM(SALARY), 2) AS SUM_ALL_SALARY,
ROUND(AVG(SALARY), 2) AS AVERAGE_SALARY
FROM employees;

-- Exercise 6: Write a query that display the quantity of people that works as developers people(IT_PROG).
SELECT COUNT(JOB_ID = 'IT_PROG') FROM employees; -- 107

-- Exercise 7: Write a query that display the money quantity  necessary to make the payment of each occupation
-- (JOB_ID);
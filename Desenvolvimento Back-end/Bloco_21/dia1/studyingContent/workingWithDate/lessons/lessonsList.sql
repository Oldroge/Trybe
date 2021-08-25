-- Lesson 1: Assemble a query that display the days difference between '2030-01-20' and today;;
SELECT DATEDIFF('2030-01-20', CURRENT_DATE());
SELECT DATEDIFF('2030-01-20', NOW());

-- Lesson 2: Assemble a query, display the hour difference between '10:25:45' and '11:00:00';
SELECT TIMEDIFF('10:25:45', '11:00:00');

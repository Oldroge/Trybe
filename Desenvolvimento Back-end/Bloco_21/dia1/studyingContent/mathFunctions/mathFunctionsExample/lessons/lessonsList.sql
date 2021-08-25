-- Lesson 1: Set up a query using the MOD together with the IF to discover whether the value 15 is even or odd
-- call this column of 'Par ou Ímpar', where it can say 'Par' or 'Ímpar';
SELECT  IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';

-- Lesson 2: We have a movie theater that holds 220 people. How many complete groups by 12 people we take along
-- to the movie theater without no one is left out?
SELECT 220 DIV 12;

-- Lesson 3: Using the previous result, answer the follow question: Have we places remaining?
-- If yes, how many?
SELECT 220 MOD 12;

-- Lesson 4: Assemble a query that generate a value between 15 and 20;
SELECT ROUND(15 + (RAND() * 5));

-- Lesson 5: Assemble a query that display the rounded value by 15.7515971 with a precision of the 
-- 5 decimal places;
SELECT ROUND(15.7515971, 5);

-- Lesson 6: We are with an avarange of 39.494 t-shirt saler per month. What it is approximate value
-- rounded to down this average?
SELECT FLOOR(39.494);

-- Lesson 7: We have registration fee of 85.234% in the photografy course for beginners. Which is the 
-- approximate value to up this average?
SELECT CEIL(85.234);

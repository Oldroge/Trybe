-- Lesson 1: Set up a query using the MOD together with the IF to discover whether the value 15 is even or odd
-- call this column of 'Par ou Ímpar', where it can say 'Par' or 'Ímpar';
SELECT  IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';

-- Lesson 2: We have a movie theater that holds 220 people. How many complete groups by 12 people we take along
-- to the movie theater without no one is left out?
SELECT 220 DIV 12;

-- Lesson 3: Using the previous result, answer the follow question: Have we places remaining?
-- If yes, how many?
SELECT 220 MOD 12;
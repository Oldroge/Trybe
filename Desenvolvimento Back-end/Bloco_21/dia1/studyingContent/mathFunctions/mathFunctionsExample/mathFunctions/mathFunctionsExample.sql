-- For the math operations more commons, we can use the usually math operators. Lets to test each one.
SELECT 5 + 5;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;

-- We can use the directly collumns, in necessary case;
SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;

-- INTEGER DIVISION EXAMPLE:
SELECT 10 DIV 3; -- 3
SELECT 10 DIV 2; -- 5
SELECT 14 DIV 3; -- 4
SELECT 13 DIV 2; -- 6
-- Returns the integer value;

-- MOD OPERATOR EXAMPLE:
SELECT 10 MOD 3; -- 1
SELECT 10 MOD 2; -- 0
SELECT 14 MOD 3; -- 2
SELECT 13 MOD 2; -- 1
SELECT 10.5 MOD 2; -- 0.5, ou seja, 2 + 2 + 2 + 2 + 2 = 10, restando 0.5
-- Returns the remaining value;

-- ROUNDED VALUES:
-- We can omit the decimal paces as much as we want;
SELECT ROUND(10.4925); -- 10
SELECT ROUND(10.5136); -- 11
SELECT ROUND(-10.5136); -- -11
SELECT ROUND(10.4925, 2); -- 10.49
SELECT ROUND(10.4925, 3); -- 10.493

-- The rounded always up:
SELECT CEIL(10.51); -- 11
SELECT CEIL(10.49); -- 11
SELECT CEIL(10.2); -- 11

-- The rounded always down:
SELECT FLOOR(10.51); -- 10
SELECT FLOOR(10.49); -- 10
SELECT FLOOR(10.2); -- 10

-- EXPONENTIATION AND SQUARE ROOT:
-- Raising power:
SELECT POW(2, 2); -- 4
SELECT POW(2, 4); -- 16

-- Square root:
SELECT SQRT(9); -- 3
SELECT SQRT(16); -- 4

-- GENERATE RANDOM VALUES:
-- To generate random values between 0 and 1:
SELECT RAND();

-- To generate a value between 7 and 13:
SELECT ROUND(7 + (RAND() * 6));

-- Ps: The calculation is done that way: (7 + (0.0 a 1.0 * 6));

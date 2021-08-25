-- The follow query search the name and the names quantity registered in the table sakila.actor
--  and grouped by quantity. Filter the results grouped using the HAVING, for that only the name that are 
--  registered two or more times be display;
SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

-- Or, better yet, using the AS for give the names to aggregations columns
-- improving  the result read;
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observation: The alias dont work with srings for the HAVING,
-- so use the uderline ("_") to separate words,
-- that is, the example bellow dont works;
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;

-- IMPORTANT!! When we use the HAVING we are only filtering the results generate after the GROUP BY have been
-- executed;
-- SINTAX:
SELECT t1.column, t2.column
FROM table1 AS t1
INNER JOIN table2 AS t2
ON t1.common_column = t2.common_column;

-- Example applying:
SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor AS a
INNER JOIN film_actor AS f
ON a.actor_id = f.actor_id;
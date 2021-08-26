-- RIGHT JOIN: The business rule follow the pattern give the preference for the right side of the column, return
-- the corresponding values of the left table, if there are. Values that dont have correspondents
-- are displayed as null;

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
RIGHT JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

SELECT * FROM customer where last_name = 'SMITH';
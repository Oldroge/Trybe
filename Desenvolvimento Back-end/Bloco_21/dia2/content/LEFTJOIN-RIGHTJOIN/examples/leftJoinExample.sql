-- LEFT JOIN: The business rule follow the pattern give the preference for the left side of the column, return
-- the corresponding values of the right table, if there are. Values that dont have correspondents are
-- displayed as null;
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
LEFT JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

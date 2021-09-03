-- A view is like a temporary table in my database, and here I put some examples about syntax and ways
-- that can use:

-- Define which database to use:
USE nome_do_banco_de_dados;
-- Command to create a view:
CREATE VIEW nome_da_view AS QUERY;

-- Use example:
CREATE VIEW top_10_customers AS
    SELECT c.customer_id, c.first_name, SUM(p.amount) AS total_amount_spent
    FROM sakila.payment p
    INNER JOIN sakila.customer c ON p.customer_id = c.customer_id
    GROUP BY customer_id
    ORDER BY total_amount_spent DESC
    LIMIT 10;
    
-- To delet the view:
DROP VIEW nome_da_view;

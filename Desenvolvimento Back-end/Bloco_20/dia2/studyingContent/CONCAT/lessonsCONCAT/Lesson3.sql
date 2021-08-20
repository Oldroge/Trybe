-- Lesson 3: In the table sakila.address, mount a query that shows the street and the district of each 
-- register only in one column, and give it this column the Adress name.alter;

SELECT CONCAT (address, ' - ', district) AS Full_address FROM sakila.address;
 
-- Insert a new employee in the table sakila.staff;
-- To know which field are required, click with the right button in the table sakila.staff and select
-- "table inspector". Click in the tab "columns" and verify which fields accept nulls to guide you. 
-- Remember that values are generated automatically and dont need be insert manually.
SELECT * FROM staff;
INSERT INTO staff (
first_name,
last_name,
address_id,
email,
store_id,
active,
username,
password
) VALUES (
'Rogério',
'Martins',
3,
'roge@trybe.com',
2,
1,
'Roge',
'batman'
);

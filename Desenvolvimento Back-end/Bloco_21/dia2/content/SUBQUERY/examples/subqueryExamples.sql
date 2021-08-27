-- Using a SUBQUERY as a data font for the FROM;
SELECT f.title, f.rating, f.release_year
FROM (
    SELECT *
    FROM sakila.film
    WHERE rating = 'PG'
) AS f;

-- FIll a column of a SELECT by the SUBQUERY;
SELECT
    address,
    district,
    (
        SELECT city
        FROM sakila.city
        WHERE city.city_id = sakila.address.city_id
    ) AS city
FROM sakila.address;
SELECT * from address;

-- Filtering results with WHERE using as base the datas retuned FROM the SUBQUERY;
SELECT address, district
FROM sakila.address
WHERE city_id in (
    SELECT city_id
    FROM sakila.city
    WHERE city in ('Sasebo', 'San Bernardino', 'Athenai', 'Myingyan')
);

-- Using a external table, out of SUBQUERY, inside it;
SELECT
    first_name,
    (
        SELECT address
        FROM sakila.address
        WHERE address.address_id = tabela_externa.address_id
    ) AS address
FROM sakila.customer AS tabela_externa;
SELECT * from customer;

-- SUBQUERY or JOIN;
-- IN the previous queries we can resolve using the JOIN too, but how to choose the better one between both?
-- Decide trougth the perfomance test and, then, by afinity;

-- Using SUBQUERY:
SELECT
    first_name,
    (
        SELECT address
        FROM sakila.address
        WHERE address.address_id = tabela_externa.address_id
    ) AS address
FROM sakila.customer AS tabela_externa; -- Perfomance test: 61.15

-- Using inner JOIN:
SELECT c.first_name, ad.address
FROM sakila.customer c
INNER JOIN sakila.address ad ON c.address_id = ad.address_id; -- Perfomance test: 270.80
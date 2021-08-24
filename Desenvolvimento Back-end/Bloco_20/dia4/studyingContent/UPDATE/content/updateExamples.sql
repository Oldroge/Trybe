-- Sintax:
UPDATE nome_da_tabela
SET propriedade_a_ser_alterada = 'novo valor para coluna'
WHERE alguma_condicao; -- importantíssimo aplicar o WHERE para não alterar a tabela inteira!

-- Mass update!
-- For performance reasons, to only a query request be sent to the server, we
-- can do a mass update.
-- Opção 1 - Incluindo a lista de condições fixas
UPDATE sakila.actor
SET first_name = 'JOE'
WHERE actor_id IN (1,2,3);

-- Opção 2 - Especificando como cada entrada será alterada individualmente
UPDATE sakila.actor
SET first_name = (
CASE actor_id WHEN 1 THEN 'JOE' -- se actor_id = 1, alterar first_name para 'JOE'
              WHEN 2 THEN 'DAVIS' -- se actor_id = 2, alterar first_name para 'DAVIS'
              WHEN 3 THEN 'CAROLINE' -- se actor_id = 3, alterar first_name para 'CAROLINE'
          ELSE first_name -- em todos os outros casos, mantém-se o first_name
END);

-- Using UPDATE with ORDER BY and LIMIT;
UPDATE nome_da_tabela
SET coluna1 = valor1, coluna2 = valor2
[WHERE condições]
[ORDER BY expressao [ ASC | DESC ]]
[LIMIT quantidade_resultados];

-- Exemplo:
UPDATE sakila.staff
SET password = 'FavorResetarSuaSenha123'
WHERE active = 1
ORDER BY last_update
LIMIT 2;

-- Using --safe-updates;
SET sql_safe_updates=1, sql_select_limit=1000, max_join_size=1000000;
-- sql_select_limit: Limit result set SELECT at 1.000;
-- max_join_size: Makes the instrutions SELECT display an error whether server
-- find more than 1.000.000 line combinations.

-- Can disable the --safe-updates using the SET command:
SET SQL_SAFE_UPDATES = 0;

-- You can also to set up a mode more conveniet for you:
SET sql_safe_updates=1, sql_select_limit=500, max_join_size=10000;

-- Syntax example about how to drop a table:
DROP TABLE nome_da_tabela;

-- IMPORTANT: Impossible delete a table that is referenced by a foreign key, if you try probably will run a
-- error like the example below:
DROP TABLE sakila.language;
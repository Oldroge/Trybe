-- The previuos example it was only to show other possibilities to use Primary Key in other context,
-- for that context we can use only and ID as primary key to table cidades and would be more simple.
-- See the example below:
     -- Apagar a versão antiga da tabela
     DROP TABLE cidades; 
     CREATE TABLE cidades(
       id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
       cidade VARCHAR(100) NOT NULL,
       estado VARCHAR(10) NOT NULL,
       populacao INTEGER
    );

    INSERT INTO cidades(cidade, estado, populacao)
    VALUES('Rio Claro','SP',185421),
          ('Rio Claro','RJ',17216);
          
-- But the group primary keys can be usefull in other context with more complexity;
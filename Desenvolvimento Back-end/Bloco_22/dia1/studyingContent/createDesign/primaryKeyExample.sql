    -- Create a database using the primary key;
    
    DROP SCHEMA IF EXISTS Brasil;
    CREATE SCHEMA Brasil;
    USE Brasil;

    CREATE TABLE cidades(
        cidade VARCHAR(100) NOT NULL,
        estado VARCHAR(10) NOT NULL,
        populacao INTEGER,
        CONSTRAINT PRIMARY KEY(cidade)
    );
    
    -- Attempt to insert new values in the table;
        INSERT INTO cidades(cidade, estado, populacao)
    VALUES('Rio Claro','SP',185421),
          ('Rio Claro','RJ',17216);
	-- Happen an error cause the PK is only City and the PK cant repeat;
    -- To fix this we can add Primary Key Group and whether one of the keys repeat the shouldn't, like in
    -- the example below:
    
        DROP SCHEMA IF EXISTS Brasil;
    CREATE SCHEMA Brasil;
    USE Brasil;

    CREATE TABLE cidades(
        cidade VARCHAR(100) NOT NULL,
        estado VARCHAR(10) NOT NULL,
        populacao INTEGER,
        CONSTRAINT PRIMARY KEY(cidade, estado)
    );
    
    -- Now the primary keys is as cidade as estado and if any of the keys values repeat, the other to recover;
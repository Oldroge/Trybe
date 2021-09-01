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
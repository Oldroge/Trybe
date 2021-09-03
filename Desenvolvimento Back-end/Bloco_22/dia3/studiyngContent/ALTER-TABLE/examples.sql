-- Alter table and the main concepts to use it:

-- Created a example table:
USE sakila;
CREATE TABLE noticia(
    noticia_id INT PRIMARY KEY,
    titulo VARCHAR(100),
    historia VARCHAR(300)
) engine = InnoDB;

-- Below some changes that we can do with the alter table:
-- Add a new column
ALTER TABLE noticia ADD COLUMN data_postagem date NOT NULL;

-- Modify the column type and properties
ALTER TABLE noticia MODIFY noticia_id BIGINT;

-- Add automatic increment to an column
-- (specify the column type + auto_increment)
ALTER TABLE noticia MODIFY noticia_id BIGINT auto_increment;

-- Change the column type and name
ALTER TABLE noticia CHANGE historia conteudo_postagem VARCHAR(1000) NOT NULL;

-- Drop/Delete a column
ALTER TABLE noticia DROP COLUMN data_postagem;

-- Add a new column after other
ALTER TABLE noticia ADD COLUMN data_postagem DATETIME NOT NULL AFTER titulo;
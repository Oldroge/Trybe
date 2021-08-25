-- Lesson 1: Assemble a query that display:
-- length average from the movies and give the column name of 'Média de Duração';
SELECT AVG(length) AS Média_de_Duração FROM sakila.film;

-- Minimum duration from the movies as 'Duração Minima';
SELECT MIN(length) AS Duração_Mínima FROM sakila.film;

-- The maximum duration from the movies as 'Duração Máxima';
SELECT MAX(length) AS Duração_Máxima FROM sakila.film;

-- The sum of all durations as 'Tempo de Exibição total';
SELECT SUM(length) AS Tempo_de_exibição_total FROM sakila.film;

-- Finally, the total quatity of movies registered in the table sakila.film as 'Filmes Registrados';
SELECT COUNT(title) AS Filmes_registrados FROM sakila.film;

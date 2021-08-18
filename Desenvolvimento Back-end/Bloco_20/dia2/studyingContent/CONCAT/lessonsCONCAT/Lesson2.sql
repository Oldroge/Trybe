-- Lesson 2: In the table sakila.film, create a query that show the title from the movie and your parental
-- rating (PG, G, NC-17) only one column. Give it the name rating. Dont forget to let a space between the 
-- words to stay readable.alter;

 SELECT CONCAT (title, ' ', rating) AS rating FROM sakila.film;
 
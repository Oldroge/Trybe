-- Exercise 1: Using the INNER JOIN, find the nacional sales (domestic_sales) and internationals 
-- (international_sales) of each movie;
USE Pixar;
SELECT
	Box.movie_id,
    Movies.title,
    Box.domestic_sales,
    Box.international_sales
FROM Movies AS Movies
INNER JOIN BoxOffice AS Box
ON Movies.id = Box.movie_id;

-- Exercise 2: Using the INNER JOIN, do a search that returns the sales number for each movie that have the
-- biggest number of international sales (international_sales) than national sales (domestic_sales);
SELECT	Movies.title,
        Box.international_sales,
        Box.domestic_sales
FROM Movies AS Movies
INNER JOIN BoxOffice AS Box
ON Movies.id = Box.movie_id
WHERE Box.international_sales > Box.domestic_sales;

-- Exercise 3: Using the INNER JOIN, do a search that return the movies and your rating (rating) 
-- in decreasing order;
SELECT Movies.title,
		Box.rating
FROM Movies AS Movies
INNER JOIN BoxOffice AS Box
ON Movies.id = Box.movie_id
ORDER BY Box.rating DESC;

-- Exercise 4: Using the LEFT JOIN, do a search that returns all the theater datas, even the ones that dont
-- have movies in poster and, additionally, the movies data that are in poster in these theater. Return
-- the theater names in alphatic order;
SELECT * FROM Theater;
SELECT Movies.title,
		Theater.name,
        Theater.location
FROM Movies AS Movies
LEFT JOIN Theater AS Theater
ON Movies.theater_id = Theater.id
ORDER BY Theater.name ASC;

-- Exercise 5: Using the RIGHT JOIN, do a search that returns all movies data, even the ones that aren't in
-- poster and, additionally, the movies data that have these movies in poster. Return the theater names in
-- alphatic order;
SELECT Movies.title,
		Theater.name,
        Theater.location
FROM Movies AS Movies
RIGHT JOIN Theater AS Theater
ON Movies.theater_id = Theater.id
ORDER BY Theater.name ASC;

-- Exercise 6: Do two searches, one using a SUBQUERY and other using INNER JOIN, that returns the movie 
-- titles and have rating bigger than 7.5;
SELECT Movies.title
FROM Movies
WHERE id IN (SELECT
			movie_id
		FROM
			BoxOffice
		WHERE
			rating > 7.5
);



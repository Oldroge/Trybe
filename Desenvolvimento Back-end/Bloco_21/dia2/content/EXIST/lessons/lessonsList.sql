USE hotel;
-- Lesson 1: Using the EXISTS in the table books_lent and books, display the books id and title that are still
-- weren't borrowed;
SELECT * FROM Books;
SELECT Id, Title FROM Books as b
WHERE NOT EXISTS (
 		SELECT * FROM Books_Lent
        WHERE b.Id = Books_Lent.book_id
        );
SELECT * FROM Books;

-- Lesson 2: Using the EXISTS in the table books_lent and books, display the books id and title that are
-- current borrowed and contains the "lost" world in the title;
SELECT id, title FROM Books AS b
WHERE EXISTS (
		SELECT * FROM Books_Lent
        WHERE b.Id = Books_Lent.book_id
);

-- Lesson 3: Using the carsales and customers table, display only the customers names that dont still 
-- buy a car;
SELECT `Name` FROM Customers AS c
WHERE NOT EXISTS (
		SELECT * FROM CarSales 
        WHERE c.CustomerId = CarSales.CustomerID
);

-- Lesson 4: Using the EXISTS command together with JOIN and the cars, customers and carsales tables, display the
-- customer name and the car model of all customers who shopped cars;               
SELECT Cust.name, Cars.name
FROM Cars AS Cars
INNER JOIN Customers AS Cust
WHERE EXISTS (
	SELECT *
    FROM CarSales
    WHERE 
    CustomerID = Cust.CustomerId
		AND carID = Cars.ID
);


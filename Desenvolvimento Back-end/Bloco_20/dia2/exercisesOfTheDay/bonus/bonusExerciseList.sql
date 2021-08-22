-- Exercise 1: Write a query to display the piece and the price of all that provided by employer RBT;
SELECT Piece, Price FROM Provides WHERE Provider='RBT';

-- Exercise 2: Write a query to display all informations of the five pieces with the biggest price;
SELECT * FROM Pieces, Providers, Provides ORDER BY Price DESC LIMIT 5;

-- Exercise 3: Write a query to display the employer names and price of the pieces with the four biggest prices,
-- starting the list from third item;
SELECT Provider, Price FROM Provides ORDER BY Price DESC LIMIT 4 OFFSET 2;

-- Exercise 4: Write a query to display all informations of the pieces that are providers by HAL employer
-- Order the results by decreasing form pieces prices;
SELECT * FROM Pieces, Providers, Provides WHERE Provider="HAL" ORDER BY Price DESC;

-- Exercise 5: Write a query to display by how many companies the piece 1 is provided;
SELECT COUNT(Piece) FROM Provides WHERE Piece=1;

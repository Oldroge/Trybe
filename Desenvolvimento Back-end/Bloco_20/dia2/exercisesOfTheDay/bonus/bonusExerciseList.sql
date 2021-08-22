-- Exercise 1: Write a query to display the piece and the price of all that provided by employer RBT;
SELECT Piece, Price FROM Provides WHERE Provider='RBT';

-- Exercise 2: Write a query to display all informations of the five pieces with the biggest price;
SELECT * FROM Pieces, Providers, Provides ORDER BY Price DESC LIMIT 5;
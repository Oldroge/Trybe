-- Example about EXIST:
SELECT * FROM hotel.Customers AS c
WHERE EXISTS (
	SELECT * FROM hotel.Reservations
    WHERE c.CustomerID = Reservations.CustomerId
    );
    
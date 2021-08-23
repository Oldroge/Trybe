-- Lesson 1: Display the name, last name and e-mail from customers with the following last names:
-- (hicks, crawford, henry, boyd, mason, morales e kennedy) in alphatic order;
SELECT first_name, last_name, email FROM customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name ASC, last_name ASC;

-- Lesson 2: Display the customer e-mails with the address_id 172, 173, 174, 175 e 176, in alphatic order;
SELECT email FROM customer WHERE address_id
BETWEEN(172) AND (176) ORDER BY email;

-- Lesson 3: Discover how many payments were did between 01/05/2005 and 01/08/2005. Remember that, 
-- in the databases, the dates are stored in year/month/day, different brazilian format, that is day/month/year;
SELECT COUNT(payment_id) FROM payment WHERE payment_date BETWEEN('2005-05-01') AND ('2005-08-01');

-- Lesson 4: Display the title, release year and renta duration of all movies with the rental duration 
-- between 3 to 6. The results should be classified in films with biggest rental duration first. Case draw
-- ordered in alphatic order by title;
SELECT title, release_year, rental_duration FROM film
WHERE rental_duration BETWEEN(3) AND (6)
ORDER BY rental_duration DESC, title ASC;
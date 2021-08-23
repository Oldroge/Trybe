-- Lesson 1: Display the name, last name and e-mail from customers with the following last names:
-- (hicks, crawford, henry, boyd, mason, morales e kennedy) in alphatic order;
SELECT first_name, last_name, email FROM customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name ASC, last_name ASC;
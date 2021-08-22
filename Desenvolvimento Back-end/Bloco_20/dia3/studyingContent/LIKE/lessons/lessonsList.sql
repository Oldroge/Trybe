-- Lesson 1: Display all film details that contains the ace word in the name;
SELECT * FROM film WHERE title LIKE '%ace%';

-- Lesson 2: Display all filme details whose descriptions finish with china;
SELECT * FROM film WHERE description LIKE '%china';
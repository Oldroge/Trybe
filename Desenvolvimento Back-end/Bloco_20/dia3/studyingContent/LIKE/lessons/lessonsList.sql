-- Lesson 1: Display all film details that contains the ace word in the name;
SELECT * FROM film WHERE title LIKE '%ace%';

-- Lesson 2: Display all filme details whose descriptions finish with china;
SELECT * FROM film WHERE description LIKE '%china';

-- Lesson 3: Display all details from two movies whose descriptions have the girl word and the title ends with
-- the lord word;
SELECT * FROM film WHERE description LIKE '%girl%' AND title LIKE '%lord';

-- Lesson 4: Display the two cases that from the 4º character in the film title, have the gon word;
SELECT * FROM film WHERE title LIKE '___gon%';

-- Lesson 5: Display the only case tha from the 4º character in the film title, have the gon word and in
-- description have the Documentary word;
SELECT * FROM film WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';

-- Lesson 6: Display the two movies whose titles or finish with Academy or start with mosquito;
SELECT * FROM film WHERE title LIKE '%academy' OR title LIKE 'mosquito%';

-- Lesson 7: Display the six movies that contains the monkey word and sumo in your describes;
SELECT * FROM film WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';

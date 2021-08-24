-- Lesson 1: Make a query that display the word 'Trybe' in UPPERCASE;
SELECT UCASE('Trybe');

-- Lesson 2: Make a query that change the sentence 'Você já ouviu falar do DuckDuckGo?' em 
-- 'Você já ouviu falar do Google?';
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');

-- Lesson 3: Using a query, find how many characters we have in 'Uma frase qualquer';
SELECT LENGTH('Uma frase qualquer');

-- Lesson 4: Extract and return a word "JavaScript" from sentence 'A linguagem JavaScript está entre as mais usadas';
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);

-- Lesson 5: Finally, standardize the string 'RUA NORTE 1500, SÃO PAULO, BRASIL' for that your informations
-- is in lowercase;
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');

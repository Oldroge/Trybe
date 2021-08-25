-- We can consult the current date and hour using the follow functions:
SELECT CURRENT_DATE(); -- YYYY-MM-DD
SELECT NOW(); -- YYYY-MM-DD HH:MM:SS

-- We can also calculate the difference in days between two dates using the DATEDIFF and the time difference
-- between two schedules using the TIMEDIFF. Both cases, the second value is subtracted from de first to 
-- calculate the result;

-- 30, that is, the first date is 30 days after the second;
SELECT DATEDIFF('2020-01-31', '2020-01-01');

-- -30, that is, the first date is 30 days before the second;
SELECT DATEDIFF('2020-01-01', '2020-01-31');

-- -01:00:00, that is, there is  1 hour difference between both;
SELECT TIMEDIFF('10:30:10', '09:30:10');

-- And finally, we can extract any part of a date from a column;
SELECT DATE(data_cadastro); -- YYYY-MM-DD
SELECT YEAR(data_cadastro); -- Ano
SELECT MONTH(data_cadastro); -- Mês
SELECT DAY(data_cadastro); -- Dia
SELECT HOUR(data_cadastro); -- Hora
SELECT MINUTE(data_cadastro); -- Minuto
SELECT SECOND(data_cadastro); -- Segundo

-- Other example how to combine the CURRENT_DATE() and NOW() together the above commands;
SELECT YEAR(CURRENT_DATE()); -- return the current year
SELECT HOUR(NOW()); -- return the current hour
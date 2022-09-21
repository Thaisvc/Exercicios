USE sakila;
#Adicione os dois principais atores do novo filme Matrix na tabela actor;
INSERT INTO actor (first_name,last_name) VALUES ('Keanu','Reeves'), ('Carrie-Ann', 'Moss');
#Adicione o filme Matrix 4 na tabela film;
INSERT INTO `film` ( `title`,`description`,`release_year`,`language_id`,`original_language_id`,`rental_duration`,
`rental_rate`, `length`,`replacement_cost`,`rating`,`special_features`) VALUES ( 'Matrix Resurrections',
'Matrix: Resurrections é o novo filme da franquia Matrix, continuando a saga de Neo (Keanu Reeves) em sua busca pela libertação das pessoas aprisionadas mentalmente pelas máquinas.
', 2021, 1,NULL, 3, 2.99, 140,21, 'G','Trailers');


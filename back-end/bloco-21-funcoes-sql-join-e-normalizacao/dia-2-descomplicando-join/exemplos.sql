#Exercício 1 Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT Movies.title, BoxOffice.domestic_sales, BoxOffice.international_sales
FROM Movies INNER JOIN BoxOffice ON BoxOffice.movie_id = Movies.id;

#🚀 Exercício 2 Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
SELECT m.title,( b.domestic_sales + b.international_sales) vendas
FROM Movies m INNER JOIN BoxOffice b ON b.movie_id = m.id WHERE  b.international_sales >  b.domestic_sales;

#🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT m.title, b.rating FROM Movies AS m INNER JOIN BoxOffice AS b ON b.movie_id = m.id ORDER BY b.rating DESC;

#Exercício 4 Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT  t.name, t.location, m.title, m.director, m.length_minutes, m.year
 FROM Theater AS t LEFT JOIN Movies AS m ON m.theater_id = t.id ORDER BY t.name ;

#Exercício 5 Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT  m.title, m.director, m.length_minutes, m.year,  t.name, t.location
 FROM Theater AS t RIGHT JOIN Movies AS m ON m.theater_id = t.id ORDER BY t.name ;

#🚀 Exercício 6 Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz (possuem theater_id diferente de NULL) com avaliação maior que 8.
SELECT  m.title, m.director, m.length_minutes, m.year
 FROM Movies AS m INNER JOIN BoxOffice AS b ON m.id = b.movie_id  WHERE m.theater_id IS NOT NULL  AND b.rating > 8 ;


#1 Busque por todas pessoas e todos os pets que estejam associados
SELECT person.name , pet.name FROM person INNER JOIN pet ON person.id = pet.person_id;

#2. Busque todos os nomes das pessoas que possuem pedidos realizados e as pessoas funcionárias que fizeram a operação
SELECT person.name , pet.name FROM person INNER JOIN pet ON person.id = pet.person_id;

#Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.
SELECT actor.actor_id, actor.first_name,film_actor.film_id FROM actor
INNER JOIN film_actor ON actor.actor_id = film_actor.actor_id;

#Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address. 
SELECT s.first_name, s.last_name, a.address FROM staff AS s 
INNER JOIN address AS a ON s.address_id = a.address_id;

#Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address. 
SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address FROM customer c 
INNER JOIN address a ON  c.address_id = a.address_id ORDER BY c.first_name DESC LIMIT 100;
;






















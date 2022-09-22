# 1. Retorne o id de customer e a média de dias que uma pessoa usuária permanece com o produto alugado;
SELECT customer_id, AVG(datediff(return_date, rental_date)) FROM
sakila.rental GROUP BY customer_id;

#2. Retorne o tempo máximo, mínimo e a média de tempo dos filmes lançados em 2006 por rating;
SELECT rating, AVG(length), MAX(length), MIN(length) FROM sakila.film WHERE release_year = '2006' GROUP BY rating;

#3. Quantas pessoas usuárias temos por cidade;
SELECT city_id as 'Cidade', COUNT(city_id) as `qtd` FROM sakila.address GROUP BY `city_id` ORDER BY `qtd` DESC;

#4. Qual o valor total (amount) recebido dentro de cada mês?
SELECT SUM(amount) as `soma`,year(payment_date),month(payment_date) FROM sakila.payment GROUP BY year(payment_date),
month(payment_date)ORDER BY year(payment_date),month(payment_date);

#5. Retorne a quantidade de itens alugados pelo preço (amount) que sejam menores ou iguais a 1.99
SELECT amount as `preço`, COUNT(amount) as `qtd` FROM sakila.payment GROUP BY amount HAVING amount <= 1.99 
ORDER BY `qtd` DESC;

# 6. Qual valor arrecadado (soma) por valor de produto que tem mais saída por mês e ano?
SELECT amount, SUM(amount) as `soma`, month(payment_date), year(payment_date) FROM sakila.payment GROUP BY amount,
year(payment_date), month(payment_date) ORDER BY year(payment_date),month(payment_date), amount;
#_________________________________________________________________________________________________________________________
#1. Escreva uma query que exiba o maior salário da tabela.
SELECT MAX(salary) FROM hr.employees;

#2. 🚀 Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT MAX(salary) - MIN(salary) FROM hr.employees;

#3. 🚀 Escreva uma query que exiba a média salarial de cada JOB_ID, ordenando pela média salarial em ordem decrescente.
SELECT job_id, AVG(salary) AS 'average_salary'  FROM hr.employees GROUP BY job_id ORDER BY average_salary DESC;

#4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT SUM(salary) FROM hr.employees;

#5. 🚀 Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT MAX(salary), MIN(salary), SUM(salary), ROUND(AVG(salary), 2) FROM hr.employees;

# 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (IT_PROG).
SELECT COUNT(employee_id) FROM hr.employees WHERE job_id =  'IT_PROG';
# gabarito SELECT job_id , COUNT(*) AS 'total' FROM hr.employees WHERE job_id = "it_prog";

#7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (JOB_ID).
SELECT job_id, SUM(salary) AS 'soma'  FROM hr.employees GROUP BY job_id;

#8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (IT_PROG).
SELECT job_id, SUM(salary) AS 'soma'  FROM hr.employees GROUP BY job_id HAVING job_id = 'IT_PROG';

#9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (IT_PROG).
SELECT job_id , AVG(salary) FROM hr.employees WHERE job_id  <> 'IT_PROG' GROUP BY job_id ORDER BY salary DESC;
# gabarito SELECT job_id, AVG(salary) AS 'average_salary'FROM hr.employees WHERE job_id <> 'it_prog'GROUP BY job_id ORDER BY average_salary DESC;

#10. 🚀 Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo DEPARTMENT_ID.
SELECT department_id, AVG(salary) AS 'average_salary' , COUNT(*) AS 'number_of_employees' FROM hr.employees 
GROUP BY department_id HAVING number_of_employees > 10;

#11. 🚀 Escreva uma query que atualize a coluna PHONE_NUMBER, de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.
UPDATE hr.employees SET phone_number = REPLACE(phone_number, '515', '777') WHERE phone_number  LIKE '515%';

#12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT * FROM hr.employees WHERE LENGTH(first_name) >= 8;

#13. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT employee_id,first_name, year(hire_date) FROM hr.employees;
# gabarito SELECT employee_id, first_name, YEAR(hire_date) 'hire_year' FROM hr.employees;
#-- OR  gabarito
# SELECT employee_id, first_name, LEFT(hire_date, 4) 'hire_year'FROM hr.employees;
#-- OR gabarito
#SELECT employee_id, first_name, MID(hire_date, 1, 4) 'hire_year'FROM hr.employees;
#-- MID() é equivalente a função SUBSTRING()

#14. 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
SELECT employee_id,first_name, day(hire_date) FROM hr.employees;
# gabarito SELECT employee_id, first_name, RIGHT(hire_date, 2) 'hire_day' FROM hr.employees;
#-- OR gabarito
# SELECT employee_id, first_name, MID(hire_date, 9, 2) 'hire_day' FROM hr.employees;
# -- MID() é equivalente a função SUBSTRING()
#-- OR gabarito
# SELECT employee_id, first_name, DAY(hire_date) 'hire_day' FROM hr.employees;

# 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e mês no qual foi contratado (exiba somente o mês).
SELECT employee_id,first_name, MONTH(hire_date) FROM hr.employees;
# gabarito co segunda opcao SELECT employee_id, first_name, SUBSTRING(hire_date, 6, 2) 'hire_month' FROM hr.employees;

#16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT ucase(CONCAT(FIRST_NAME, " ", LAST_NAME))  FROM hr.employees;
# gabarito SELECT UPPER(CONCAT(FIRST_NAME, " ", LAST_NAME)) FROM hr.employees;

#17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
SELECT LAST_NAME _NAME, HIRE_DATE FROM hr.employees WHERE MONTH(HIRE_DATE) = 7 and YEAR(HIRE_DATE)=1987;
# gabarito outra opç SELECT last_name, first_name, hire_date FROM hr.employees WHERE hire_date BETWEEN '1987-07-01' AND '1987-07-31';

#18: 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa (em dias).
SELECT first_name, last_name, DATEDIFF(CURRENT_DATE() , HIRE_DATE) 'days_worked' FROM hr.employees;


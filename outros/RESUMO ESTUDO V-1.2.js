OPERADORES:

	atribuição:

		= atribuição(atribui uma informação em uma variavel) // Ex: var variavel = 'info'; atribui a mensagem 'info' dentro de variavel

	aritmeticos:

		+ adição
		- subtração
		* multiplicação
		/ divisão
		% resto da divisão

	comparação:

		=== igual
		!== diferente
		> maior que
		< menor que
		>= maior ou igual
		<= menor ou igual

	Logicos:

		&& E (AND)
		|| OU (OR)
		!  NÃO É (NOT)/diferente

____________________________________

ESTRUTURAS:

	variaveis e tipos:
		var numero = 1234;
		var string = 'mensagem aqui';
		var booleano = true;
		var booleano2 = false;
		var variavelApenasDeclarada;

		typeof numero; // retorna o tipo da variavel,nesse caso seria number

		var tipoDaMinhaVariavel = typeof numero; // a variavel tipoDaMinhaVariavel contem a informação 'number' que é o tipo da
                                             // variavel numero

	Arrays:
		var arrayNumero = [10, 20, 30, 40]; // esse é um array de numeros
		var arrayString = ['a', 'b', 'c', 'd']; // esse é um array de strings
		var arrayMisto = [11, 'e', 22, 'f']; // arrays também podem ser mistos
		var arrayApenasDeclarado = []; // aqui eu apenas declaro um array vazio

		metodos de arrays
			.push(elemento) // adiciona um elemento(informação) no final de um array
				Exemplo: arrayApenasDeclarado.push('g'); // agora arrayApenasDeclarado ficou assim: ['g']
								 arrayApenasDeclarado.push(50); // ['g', 50]

			.unshift(elemento) // adiciona um elemento(informação) no inicio de um array
				Exemplo: arrayApenasDeclarado.unshift('h'); // ['h', 'g', 50]
								 arrayApenasDeclarado.unshift('60'); // [60, 'h', 'g', 50]

			.pop() // remove um elemento(informação) do final do array
				Exemplo: arrayApenasDeclarado.pop() // [60, 'h', 'g']
								 arrayApenasDeclarado.pop() // [60, 'h']

			.shift() // remove um elemento(informação) do inicio do array
				Exemplo: arrayApenasDeclarado.shift() // ['h']
								 arrayApenasDeclarado.shift() // []
			.length // retorna a quantidade de elementos de um array

		Acessando elementos
			// Os array começam com o indice 0, que vai ser o primeiro elemento
			arrayString[0] // retorna o primeiro elemento 'a'
			arrayString[1] // 'b'
			// Digamos que você não saiba quantos elementos existem num array e vc quer pegar o
			// ultimo, como faria isso?	Usando o metodo .length -1
			arrayString[arrayString.length - 1] // ['d']
			// O que esta acontecendo?
			// arrayString.length retorna o tamanho, que nesse caso seria 4, mas o ultimo indice é 3,
			// por o array começar do 0, então subtraimos arrayString.length - 1 para obtermos o
			// ultimo indice
_____________________________________________

	Condição:

		/if    /else if      /else
		/se    /se não, se   /se não

		// SE (condição for verdadeira) {

		//    FAZ o que ta dentro de chaves

		// } SE NÃO, SE (essa outra condição for verdadeira) {

		//    FAZ essa outra coisa dentro de chaves,

		// } SE NÃO {

		//    FAZ essa outra coisa

		// }
    
    5 / 5 = 1 % 0 5 / 1 = 5 % 0

			if (booleano === true) {

				// faz algo aqui, como por exemplo, 
				// atribuir a uma variavel ja declarada.

				variavelApenasDeclarada = 123;

			} else if (string === 'mensagem aqui') {
				
				// faz algo aqui como por exemplo, 
				// atribuir outro valor a uma variavel 	
				// ja declarada.

				variavelApenasDeclarada = 456;

			} else {

				// se todas as outras condições não 
				// forem true vai fazer essa aqui
			
				variavelApenasDeclarada = 'nenhuma condição acima foi aceita';

			}

	Laço de repetição:

		for:
			for (var i = 0; i < 5; i++) {
			}

			for (
					 var i = 1; // declara uma variavel com um valor inicial
					 i <= 5; // condicao que vai decidir quantas vezes vai ser repetido
					 i = i + 1 // incrementa a variavel em + 1, pode usar sua forma reduzida i++
					) {

				// Executa 5 vezes, com os valores de i de 1 a 5.
				arrayApenasDeclarado.push(i);
				// isso vai se repetir ate que a condição seja false, ai ele para
			}
			// o retorno será [1, 2, 3, 4, 5]
	
	Função:
		
		// as funções podem ou não ter parametros.
		estrutura padrão:
			function nomeFuncao (parametro) {

				// faz alguma coisa aqui, como por exemplo: declaração de variaveis
				// string, array, number, boolean.
			};
		exemplo de função:

			function funcaoFazAlgo (parametro1, parametro2) {

				var novaVariavel = [];
				
				for	(var i = 0; i < 5; i++) {
					var somaDeParametros = parametro1 + parametro2;
					novaVariavel.push(somaDeParametros);
				}	
			};
			
			// chamando a função passando os parametros que ela pede
				funcaoFazAlgo(1, 3);
			// retornara um array com a soma dos parametros repetidos 5 vezes:
			// [4, 4, 4, 4, 4]

function urna(votos) {
    // Escreva seu código aqui
	var resultado;
	var a = ["A", 0];
	var b = ["B", 0];
	var c = ["C", 0];
	for (var i = 1; i < votos.length; i++){
			if (votos[i] === "A"){
			    a[1]++;
			}
			if (votos[i] === "B"){
			    b[1]++;
			}
			if (votos[i] === "C"){
			    c[1]++;
			}
	}
	let maior = a;
	if (a[1] < b[1]){
			maior = b;
	}
	if (c[1] > maior[1]){
			maior = c;
	}
	return maior[0];
}
	


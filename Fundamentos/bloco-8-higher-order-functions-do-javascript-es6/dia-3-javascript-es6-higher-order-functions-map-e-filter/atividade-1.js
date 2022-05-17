const books = [{
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
    },
    releaseYear: 1991,
},
{
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
    },
    releaseYear: 1954,
},
{
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
    },
    releaseYear: 1951,
},
{
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
        name: 'Frank Herbert',
        birthYear: 1920,
    },
    releaseYear: 1965,
},
{
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
        name: 'Stephen King',
        birthYear: 1947,
    },
    releaseYear: 1986,
},
{
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
    },
    releaseYear: 1928,
},
];


//1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map
 const bookDetalhe = books.map((infos) => `${infos.name} - ${infos.genre} - ${infos.author.name}`);

console.log(bookDetalhe); 

//🚀 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma 
//propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa 
// pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem 
// para a mais velha considerando suas idades quando o livro foi lançado.
//Dica: use as funções map, sort
  const nascimento = books.map((autor) => ( {['Autor']: autor.author.name, ['idade']: autor.releaseYear - autor.author.birthYear}))
nascimento.sort((obj1, obj2) => obj1.idade - obj2.idade);     
console.log(nascimento);  

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
//Dica: use a função filter;
 const genero = () => books.filter((book) => (book.genre === 'Fantasia' || book.genre === 'Ficção Científica'));
console.log(genero()); 
 
// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
//Dica: use as funções filter e sort
  let ano = 2022;
 const LivrosAntigo = books.filter((livro) => livro.releaseYear < ano - 60 )
 LivrosAntigo.sort((obj1, obj2) => obj1.releaseYear - obj2.releaseYear);     
 console.log(LivrosAntigo); 

//5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

 const ordenar = books.filter((book) => (book.genre === 'Fantasia' || book.genre === 'Ficção Científica')).map((book) => book.author.name).sort();
 console.log(ordenar); 

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const LivrosAntigoNomes =  books.filter((livro) => livro.releaseYear > ano - 60 ).map((book) => book.name);
console.log(LivrosAntigoNomes);  
// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
//Dica: cada inicial termina com um ponto.
function authorWith3DotsOnName() {
    return books.filter((book) => (book.author.name[1] === '.' && book.author.name[4] === '.'
        && book.author.name[7] === '.'
    ))[0].name;


}
console.log(authorWith3DotsOnName());
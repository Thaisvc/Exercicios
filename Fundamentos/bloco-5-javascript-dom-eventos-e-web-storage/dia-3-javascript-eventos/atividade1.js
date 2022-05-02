// GABARITO NAO CONSEGUI FAZER

const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function handleChangeTech(event) {
  const techElement = document.querySelector('.tech');
  techElement.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = '';
}

firstLi.addEventListener('click', handleChangeTech);
secondLi.addEventListener('click', handleChangeTech);
thirdLi.addEventListener('click', handleChangeTech);


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
//                              |função anônima SEM NOME|
input.addEventListener('input', function(event) {
  const techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
myWebpage.addEventListener('dblclick', function() {
  window.location.replace('https://blog.betrybe.com/');
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener('mouseover', function(event) {
  event.target.style.color = 'red';
});

myWebpage.addEventListener('mouseout', function(event) {
  event.target.style.color = 'unset';
});

/* DETALHES 
const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
Essa primeira parte se dedica à uma boa prática de colocar nomes que irão se repetir muito em variáveis. Além disso, evita que algumas linhas de código que veremos futuramente fiquem muito extensas.
Também podemos observar que com essas constantes, nós temos poder de acesso e edição sobre essas Li's e Inputs.
Copiar
function handleChangeTech(event) {
  const techElement = document.querySelector('.tech');
  techElement.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = '';
}

firstLi.addEventListener('click', handleChangeTech);
secondLi.addEventListener('click', handleChangeTech);
thirdLi.addEventListener('click', handleChangeTech);
A seção acima atribui uma função ao evento de clique nas nossas Li's. Essa função, primeiramente recebe o "event" como parâmetro, que é um objeto que contém informações sobre o evento que foi disparado no momento. Dentro dele existe a chave "target", que é uma referência ao elemento que deu início ao evento.
Na primeira linha dentro da função, atribuimos o elemento com a classe "tech" à uma variável e na linha seguinte, removemos essa classe do elemento. E após isso, atribuimos essa classe ao "event.target", que é a propriedade que discutimos no parágrafo anterior. Por fim, limpamos nosso input, inserindo uma string vazia em seu campo de texto.
Resumindo, tiramos a classe "tech" da Div que possuir ela, inserimos essa mesma classe na Li em que a gente clicou e aí limpamos nosso input.
Isso funciona como se estivéssemos selecionando a Li em que queremos escrever o título da música.
Copiar
input.addEventListener('input', function(event) {
  const techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
});

myWebpage.addEventListener('dblclick', function() {
  window.location.replace('https://blog.betrybe.com/');
});
Vimos no bloco de código anterior que primeiro criamos uma função e depois chamamos seu nome no segundo parâmetro do "addEventListener". Mas é possível criarmos uma função diretamente nesse campo, inclusive, isso foi feito nessas duas funções. Percebe que elas não têm um nome? Isso é permitido e o nome desse recurso é "função anônima". Mais adiante no curso você aprenderá outras formas de criar funções como essa.
A primeira função adiciona um evento "input" na nossa caixa de texto. Isso vai disparar uma função que irá adicionar o valor do input na Li que atualmente está com a classe "tech".
Pedimos uma atenção ao nome do evento da segunda função, que é "dblclick", que significa que a função apenas será acionada quando houverem dois cliques em sequência. E a ação disparada é pegar a URL atual com window.location e substituir por outro link usando .replace('https://blog.betrybe.com/') .
Copiar
myWebpage.addEventListener('mouseover', function(event) {
  event.target.style.color = 'red';
});

myWebpage.addEventListener('mouseout', function(event) {
  event.target.style.color = 'unset';
});
Agora temos mais duas funções, a primeira faz com que o texto do elemento fique com a fonte vermelha quando o mouse passar por ele, já a segunda adiciona o valor "unset" para a cor da fonte. Isso significa que esse estilo irá "resetar" a cor do elemento quando o mouse sair dele.
*/
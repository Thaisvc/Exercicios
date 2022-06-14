// intalar jest npm install --save-dev jest
//npm init para criar um projeto do 0 npm init -y para iniciar de forma padrao
// npm intala pacotes


function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

const element = <h1>Hello, {nomeCompleto("Jorge", "Maravilha")}</h1>;

function helloWorld(nome, sobrenome) {
    return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
}

const element = helloWorld("Jorge", "Maravilha");
const container = <div>{element}</div>;

const nome = 'Jorge Maravilha';
const classe = 'hello-class';
const element = <h1 className={classe}>Hello, {nome}</h1>;
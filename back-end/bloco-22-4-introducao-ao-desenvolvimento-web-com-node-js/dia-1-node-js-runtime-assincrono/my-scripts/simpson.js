const fs = require('fs').promises; // trabalha com promisse

async function readAll() { // funçao q trabalha  no json
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
  
    /* .then((fileContent) => { 
    const simpsons = JSON.parse(fileContent); // converte
    const strings = simpsons.map(({ id, name }) => `${id}-${name}`) // mapeia cada obj do arrau
    strings.forEach((string) =>  console.log(string))}) */

    const simpsons = JSON.parse(fileContent); // converte
    const strings = simpsons.map(({ id, name }) => `${id}-${name}`) // mapeia cada obj do arrau
    strings.forEach((string) =>  console.log(string))
       
    };



// A função main é apenas para termos um ponto de entrada centralizado para o nosso script
async function main() {
    await readAll();
}

main();
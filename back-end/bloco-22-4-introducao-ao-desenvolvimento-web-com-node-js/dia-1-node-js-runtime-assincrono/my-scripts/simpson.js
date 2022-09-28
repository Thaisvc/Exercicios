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

async function getSimpsonId(id) {
    const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8')
    const simpsons = JSON.parse(fileContent); 
    const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id );
    if(!chosenSimpson){
        throw new Error('id não encontrado')
    }

    return chosenSimpson
}

async function filterSimpsons(){
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8') // readFile faz a leitura do arquivo
    const simpsons = JSON.parse(fileContent); 
    const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6'); // remove o id 6 e 10 
    await fs.writeFile('./simpsons.json', JSON.stringify(newArray)) // writeFile escreve no arquivo q indiquei

}


async function createSimpsonsFamily(){
    const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent); 

    const familyIds = [1 ,2 ,3, 4]; // os ids q quero
    const simpsonsFamily = simpsons.filter((simpson) => familyIds.includes(Number(simpson.id))); // filtra os ids q quero
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily)); // escreve o q quero no novo json
}

async function addNelsonFamily(){
    const fileContent = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');
    const simpsonsFamily = JSON.parse(fileContent); // converte
    console.log(fileContent);
    console.log(simpsonsFamily);
    simpsonsFamily.push({id: '8', name: 'Nelson Muntz'}); //add no array json
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));

}


// A função main é apenas para termos um ponto de entrada centralizado para o nosso script
async function main() {
    // await readAll();
   // getSimpsonId(3).then((simpson) => console.log(simpson)) //outra forma pode ser usado wait tbm = o readAll
   // filterSimpsons()
   //createSimpsonsFamily();
   //addNelsonFamily()
};

main();
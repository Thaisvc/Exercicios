const stringFunct1 = () => 'Acordando!!';
const stringFunct3 =  () => 'Bora tomar café!!';
const stringFunct2 =  () => 'Partiu dormir!!';

const functAll = (callback) =>  callback();
    
console.log(functAll(stringFunct1));
console.log(functAll(stringFunct2));
console.log(functAll(stringFunct3));

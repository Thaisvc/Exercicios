const stringFunct1 = () => 'Acordando!!';
const stringFunct3 =  () => 'Bora tomar café!!';
const stringFunct2 =  () => 'Partiu dormir!!';

const functAll = (callback) => {
    const result = callback();
    console.log(result);
};
functAll(stringFunct1);
functAll(stringFunct3);
functAll(stringFunct2);
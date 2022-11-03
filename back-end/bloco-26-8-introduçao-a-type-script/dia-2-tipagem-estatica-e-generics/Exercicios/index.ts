/* Exercício 2: Vamos agora utilizar a classe Car que criamos no exercício anterior. Uma pessoa motorista de aplicativo irá fazer uma viagem para pegar sua nova pessoa passageira. A pessoa motorista então entra em seu volkswagen gol prata de 4 portas, liga seu carro e começa o trajeto:

Siga em frente;
Em 600 metros vire a esquerda;
Vire a esquerda;
Em 200 metros na rotatória pegue a segunda saída a direita;
Mantenha em frente pelos próximos 1,2 quilômetros;
Em 300 metros vire a direita;
Vire a direita;
Em 400 metros você chegará ao seu destino;
Você chegou ao seu destino.
Pronto. A pessoa motorista para, a pessoa passageira entra pela porta de trás do lado do carona e a viagem continua.

Siga em frente;
Em 300 metros vire a direita;
Vire a direita;
Mantenha em frente pelos próximos 2 quilômetros;
Em 200 metros vire a esquerda;
Vire a esquerda;
Em 400 metros vire a direita;
Vire a direita;
Em 100 metros você chegará ao destino.
Você chegou ao destino.
A pessoa passageira desce do veículo e a pessoa motorista segue para a próxima corrida.

Agora você deve desenvolver um script capaz de automatizar todo o cenário descrito.
 */


import Car from './car';

const cars = new Car('Volkswagen', 'prata', 4);


cars.turnOn();
cars.speedUp();
cars.speedDown();
cars.turn("esquerda");
cars.speedUp();
cars.speedDown();
cars.turn("direita");
cars.speedUp();
cars.speedDown();
cars.turn("direita");
cars.speedDown();
cars.stop();
cars.speedUp();
cars.speedDown();
cars.turn("direita");
cars.speedUp();
cars.speedDown();
cars.turn("esquerda");
cars.speedUp();
cars.speedDown();
cars.turn("direita");
cars.speedDown();
cars.stop();
cars.speedUp();
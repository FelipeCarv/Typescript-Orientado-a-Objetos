import {Veiculo} from './veiculo';
//import {Carro} from './carro';

let v = new Veiculo();

v.motor.potencia = 1000;
v.direcao.cor = "Preto";
v.modelo.modeloV = "civic";

console.log(v);
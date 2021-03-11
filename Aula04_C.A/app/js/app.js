"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var veiculo_1 = require("./veiculo");
//import {Carro} from './carro';
var v = new veiculo_1.Veiculo();
v.motor.potencia = 1000;
v.direcao.cor = "Preto";
v.modelo.modeloV = "civic";
console.log(v);

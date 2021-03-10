"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(modelo, cor, placa, numPortas) {
        this.modelo = modelo;
        this.cor = cor;
        this.placa = placa;
        if (numPortas == undefined) {
            this.numPortas = 2;
        }
        else {
            this.numPortas = numPortas;
        }
    }
    return Carro;
}());
exports.Carro = Carro;

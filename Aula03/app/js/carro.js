"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(modelo, cor, placa, numPortas) {
        this._modelo = modelo;
        this._cor = cor;
        this._placa = placa;
        if (numPortas != undefined) {
            this._numPortas = numPortas;
        }
        else {
            this._numPortas = 2;
        }
    }
    Object.defineProperty(Carro.prototype, "numPortas", {
        get: function () {
            return this._numPortas;
        },
        set: function (numPortas) {
            if (numPortas < 2) {
                this._numPortas = 2;
            }
            else {
                this._numPortas = numPortas;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "cor", {
        get: function () {
            return this._cor;
        },
        set: function (cor) {
            this._cor = cor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (modelo) {
            this._modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "placa", {
        get: function () {
            return this._placa;
        },
        set: function (placa) {
            this._placa = placa;
        },
        enumerable: false,
        configurable: true
    });
    Carro.prototype.exibirInformacoes = function () {
        console.log("Informa\u00E7\u00F5es: \n        MODELO: " + this._modelo + ",\n        COR: " + this._cor + ",\n        PLACA: " + this._placa + ",\n        PORTAS: " + this._numPortas);
    };
    ;
    return Carro;
}());
exports.Carro = Carro;

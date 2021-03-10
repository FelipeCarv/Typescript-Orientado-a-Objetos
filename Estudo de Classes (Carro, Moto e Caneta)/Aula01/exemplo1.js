var Carro = /** @class */ (function () {
    function Carro() {
    }
    //Métodos Getters and Setters
    Carro.prototype.getCor = function () {
        return this.cor;
    };
    Carro.prototype.setCor = function (cor) {
        this.cor = cor;
    };
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Carro.prototype.getPlaca = function () {
        return this.placa;
    };
    Carro.prototype.setPlaca = function (placa) {
        this.placa = placa;
    };
    return Carro;
}());
var c = new Carro();
c.modelo = "UNO";
c.cor = "amarelo";
c.placa = "XYZ123";
c.numPortas = 4;
console.log(c);

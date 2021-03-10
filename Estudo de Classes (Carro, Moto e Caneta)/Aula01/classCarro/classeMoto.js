var Moto = /** @class */ (function () {
    function Moto(marca, placa, cor, retrovisor) {
        this.marca = marca;
        this.placa = placa;
        this.cor = cor;
        if (retrovisor == undefined) {
            this.retrovisor = 2;
        }
        else {
            this.retrovisor = retrovisor;
        }
    }
    return Moto;
}());
var m = new Moto("Honda", "ABC123", "Prata", 3);
var n = new Moto("Yamaha", "DEF456", "Vermelha");
console.log(m, n);

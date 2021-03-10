var Caneta = /** @class */ (function () {
    function Caneta(modelo, cor, ponta, tampa) {
        this.modelo = modelo;
        this.cor = cor;
        this.ponta = ponta;
        if (tampa == undefined) {
            this.tampa = true;
        }
        else {
            this.tampa = tampa;
        }
    }
    return Caneta;
}());
var c = new Caneta("BIC CRISTAL", "AZUL", 0.7);
var c2 = new Caneta("BIC CRISTAL", "VERMELHO", 0.7, false);
console.log(c, "\n", c2);

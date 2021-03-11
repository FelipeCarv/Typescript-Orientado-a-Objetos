//EX01----------------------------------------
var lista = new Array();
//lista.push(10);
lista.push("texto");
//console.log(lista[0].substring(0,3));
//EX02----------------------------------------
function info(arg) {
    return arg;
}
var t = info(2);
var i = info("texto");
//console.log(t);
//console.log(i)
//EX03----------------------------------------
var Professor = /** @class */ (function () {
    function Professor(nome) {
        this.nome = nome;
    }
    return Professor;
}());
var Aluno = /** @class */ (function () {
    function Aluno(nome) {
        this.nome = nome;
    }
    return Aluno;
}());
function imprimirNome(obj) {
    console.log(obj.nome);
}
var p = new Professor('mario');
var a = new Aluno('Ana');
//imprimirNome(p);
//imprimirNome(a);
//EX04----------------------------------------
var ListaGenerica = /** @class */ (function () {
    function ListaGenerica() {
        this.lista = [];
    }
    ListaGenerica.prototype.adicionar = function (arg) {
        this.lista.push(arg);
    };
    ListaGenerica.prototype.imprimir = function () {
        this.lista.forEach(function (e) { return console.log(e); });
    };
    return ListaGenerica;
}());
var listg = new ListaGenerica();
listg.adicionar(10);
listg.adicionar(15);
listg.adicionar(3);
listg.imprimir();
var listg2 = new ListaGenerica();
listg2.adicionar("texto1");
listg2.adicionar("texto2");
listg2.adicionar("texto3");
listg2.imprimir();

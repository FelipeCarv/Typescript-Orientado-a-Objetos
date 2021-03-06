var stringUtils;
(function (stringUtils) {
    var tamanhoMaximo = 10;
    function maiuscula(texto) {
        return texto.toUpperCase();
    }
    stringUtils.maiuscula = maiuscula;
    function minuscula(texto) {
        return texto.toLowerCase();
    }
    stringUtils.minuscula = minuscula;
    function validaTexto(texto) {
        return texto.length <= tamanhoMaximo;
    }
    stringUtils.validaTexto = validaTexto;
})(stringUtils || (stringUtils = {}));
/// <reference path = 'StringUtils.ts'/>
var Texto;
(function (Texto) {
    function imprimir(texto) {
        console.log(texto);
    }
    Texto.imprimir = imprimir;
    function contarTexto(texto) {
        return texto.length;
    }
    Texto.contarTexto = contarTexto;
})(Texto || (Texto = {}));
//Texto.imprimir('felipe');
//console.log(Texto.contarTexto('felipe'));
console.log(stringUtils.maiuscula('ufrn'));
console.log(stringUtils.minuscula('FELIPE'));
console.log(stringUtils.validaTexto('typescript'));

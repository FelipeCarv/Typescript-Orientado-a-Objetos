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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var emailinvalidoerror_1 = require("./errors/emailinvalidoerror");
var nomeinvalidoerror_1 = require("./errors/nomeinvalidoerror");
var Usuario = /** @class */ (function () {
    function Usuario(email, nome) {
        this.email = email;
        this.nome = nome;
    }
    Usuario.criarUsuário = function (email, nome) {
        //teste para validar email
        if (!this.emailInvalido(email)) {
            //lançando exceção
            throw new emailinvalidoerror_1.EmailInvalidoError();
        }
        //teste para validar nome
        if (!this.nomeInvalido(nome)) {
            //lançando exceção
            throw new nomeinvalidoerror_1.NomeInvalidoError();
        }
        return new Usuario(email, nome);
    };
    Usuario.emailInvalido = function (email) {
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email);
    };
    Usuario.nomeInvalido = function (nome) {
        if (nome.length > 20 || nome == "") {
            return false;
        }
        return true;
    };
    return Usuario;
}());
exports.Usuario = Usuario;

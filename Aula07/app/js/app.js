"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usuario_1 = require("./projeto_usuario/usuario");
try {
    var usuario = usuario_1.Usuario.criarUsuário('felipe@email.com', 'Felipe Carvalho');
    console.log(usuario.nome + " - " + usuario.email);
}
catch (error) {
    console.log(error.message);
}
console.log("Programa em Execu\u00E7\u00E3o...");

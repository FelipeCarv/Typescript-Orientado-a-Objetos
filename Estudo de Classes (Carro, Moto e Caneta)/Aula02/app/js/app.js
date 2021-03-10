"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = require("./carro");
var c;
c = new carro_1.Carro("Pálio", "vermelho", "ABC123", 4);
var c2 = new carro_1.Carro("Fiesta", "Branco", "DEF456");
console.log("------ ESPECIFICA\u00C7\u00D5ES DO CARRO " + c.modelo + " -----: \n\n", c);
console.log("------ ESPECIFICA\u00C7\u00D5ES DO CARRO " + c2.modelo + " -----: \n\n", c2);

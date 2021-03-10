import { Carro } from './carro';

let c: Carro;

c = new Carro("Pálio", "vermelho", "ABC123", 4);
let c2 = new Carro("Fiesta", "Branco", "DEF456");

console.log(`------ ESPECIFICAÇÕES DO CARRO ${c.modelo} -----: \n\n`, c);
console.log(`------ ESPECIFICAÇÕES DO CARRO ${c2.modelo} -----: \n\n`, c2);

import { Usuario } from "./projeto_usuario/usuario";

try {
    
let usuario = Usuario.criarUsuário('felipe@email.com', 'Felipe Carvalho');
console.log(`${usuario.nome} - ${usuario.email}`);

} catch (error) {
    console.log(error.message);
}
 console.log(`Programa em Execução...`)



/// <reference path = 'StringUtils.ts'/>

namespace Texto{
    export function imprimir(texto: string){
        console.log(texto);
    }

    export function contarTexto(texto:string){
        return texto.length;
    }
}

//Texto.imprimir('felipe');
//console.log(Texto.contarTexto('felipe'));

console.log(stringUtils.maiuscula('ufrn'));
console.log(stringUtils.minuscula('FELIPE'));
console.log(stringUtils.validaTexto('typescript'));
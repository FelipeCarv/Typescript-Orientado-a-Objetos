namespace stringUtils{
    let tamanhoMaximo = 10;
    
    export function maiuscula(texto: string){
        return texto.toUpperCase();
    }

    export function minuscula(texto: string){
        return texto.toLowerCase();
    }

    export function validaTexto(texto:string): boolean{
        return texto.length <= tamanhoMaximo;
    }
}
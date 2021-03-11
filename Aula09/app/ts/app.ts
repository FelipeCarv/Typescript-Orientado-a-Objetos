//EX01----------------------------------------
let lista = new Array<string>();
//lista.push(10);
lista.push("texto");

//console.log(lista[0].substring(0,3));

//EX02----------------------------------------
function info<T>(arg: T): T{
    return arg;
}

let t = info(2);
let i = info("texto");

//console.log(t);
//console.log(i)

//EX03----------------------------------------

class Professor{
    constructor(public nome:string){

    }
}

class Aluno{
    constructor(public nome:string){

    }
}


interface temNome{
    nome: string;
}


function imprimirNome<T extends temNome>(obj: T){
    console.log(obj.nome);
}

let p = new Professor('mario');

let a = new Aluno('Ana');

//imprimirNome(p);
//imprimirNome(a);

//EX04----------------------------------------

class ListaGenerica<T>{
    lista: T[] = [];

    adicionar(arg: T){
        this.lista.push(arg);
    }

    imprimir(){
        this.lista.forEach(e => console.log(e));

    }
}

let listg = new ListaGenerica<number>();
listg.adicionar(10);
listg.adicionar(15);
listg.adicionar(3);

listg.imprimir();

let listg2 = new ListaGenerica<string>();
listg2.adicionar("texto1");
listg2.adicionar("texto2");
listg2.adicionar("texto3");

listg2.imprimir();
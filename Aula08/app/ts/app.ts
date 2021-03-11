
//PARAMETROS REST --------------------------------------------------------------

/*function listaNomes( ...nome:string[] ){
    return `${nome.join(', ')}`;
}

console.log(listaNomes('Felipe'));
console.log(listaNomes('Lily'));
console.log(listaNomes('Eduarda'));
console.log(listaNomes('Jose'));
console.log(listaNomes('Cida', 'Maria', 'Fernanda'));
console.log(listaNomes());
*/

// TUPLA --------------------------------------------------------------

/*
let tupla:[string, number, boolean] = ["felipe", 22, true];
console.log(tupla);
*/

// ENUM --------------------------------------------------------------


/*enum Cor{
    azul, verde, vermelho
}

let c:Cor = Cor.verde;
console.log(Cor[2]);*/
/*
enum diaDaSemana{
    domingo = 1,
    segunda = 2,
    terça = 3,
    quarta = 4,
    quinta = 5,
    sexta = 6,
    sabado = 7
}

let dia = diaDaSemana.quinta;

console.log(dia);*/

// UNION --------------------------------------------------------------
/*
function imprimirID(id: string | number | boolean){

    console.log(id);
}

imprimirID(true);
*/
/*
let x: number | string | boolean;

x = 1;
x = 'teste';
x = true;
*/

// TYPE ALIAS --------------------------------------------------------------

/*
type Aluno = {
     nome: string,
     email: string
}

let Aluno1:Aluno = {
    nome: 'jose',
    email: 'jose@email.com'
}

let Aluno2:Aluno = { 
    nome: 'maria',
    email: 'maria@email.com'
}

let Aluno3: Aluno ={
    nome: 'Felipe',
    email: 'felipe@email.com'
}

console.log(Aluno3);
*/
/*
type ID = string | number;

function imprimirID(id: ID){

    console.log(id);
}

imprimirID(123);*/
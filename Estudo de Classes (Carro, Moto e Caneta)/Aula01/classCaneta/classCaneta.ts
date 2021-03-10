class Caneta{ 
    modelo: string;
    cor: string;
    ponta: number;
    tampa: boolean;

    constructor(modelo:string, cor:string, ponta:number, tampa?:boolean){
        this.modelo = modelo;
        this.cor = cor;
        this.ponta = ponta;

        if(tampa == undefined){
            this.tampa = true;
        }else{
            this.tampa = tampa;
        }
    }
}

let c = new Caneta("BIC CRISTAL", "AZUL", 0.7);
let c2 = new Caneta("BIC CRISTAL", "VERMELHO", 0.7, false);

console.log(c,`\n`,c2);

class Moto{
    marca: string;
    placa: string;
    cor: string;
    retrovisor: number;

    constructor(marca: string, placa: string, cor: string, retrovisor?: number){
        this.marca = marca;
        this.placa = placa;
        this.cor = cor;

        if(retrovisor == undefined){
            this.retrovisor = 2; 
        }else{
            this.retrovisor = retrovisor;
        }
    }
}

let m = new Moto("Honda", "ABC123", "Prata",3);
let n = new Moto("Yamaha", "DEF456", "Vermelha");
console.log(m, n);
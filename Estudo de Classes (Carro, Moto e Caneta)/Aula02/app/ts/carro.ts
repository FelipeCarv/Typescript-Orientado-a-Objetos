export class Carro{
    modelo: string;
    cor: string;
    placa: string;
    numPortas: number;

    constructor(modelo:string, cor:string, placa:string, numPortas?:number){
        this.modelo = modelo;
        this.cor = cor;
        this.placa = placa;
        if(numPortas == undefined){
            this.numPortas = 2;
        }else{
            this.numPortas = numPortas;
        }
    }

}
class Carro{
    modelo: string;
    cor: string;
    placa: string;
    numPortas: number;

    //Métodos Getters and Setters
    getCor(): string{
        return this.cor;
    }

    setCor(cor: string){
        this.cor = cor;
    }

    getModelo(): string{
        return this.modelo;
    }

    setModelo(modelo: string){
        this.modelo = modelo;
    }

    getPlaca(): string{
        return this.placa;
    }

    setPlaca(placa: string){
        this.placa = placa;
    }

}

//Instanciando um objeto.
let c = new Carro();
c.modelo = "UNO";
c.cor = "amarelo";
c.placa = "XYZ123";
c.numPortas = 4;
console.log(c);
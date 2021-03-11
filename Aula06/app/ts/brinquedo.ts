export abstract class Brinquedo{
    constructor(private _velocidade: number){

    } 


   
    public mover() {
        console.log('Brinquedo está se movendo...');
    }
}
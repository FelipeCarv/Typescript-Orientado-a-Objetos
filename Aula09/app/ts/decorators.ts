@dataDecorator
class Pessoa{
    constructor(){
        console.log('objeto criado')
    }
}

new Pessoa();



function dataDecorator(construtor: {new(...args: any[]): { } }){
    return class extends construtor{
        constructor(...args: any[]){
            console.log('início da execução...');
            console.log(`${new Date().getHours()}:${new Date().getMinutes()}`)
            super(args)
            console.log('fim da execução...');
        }
    }
}
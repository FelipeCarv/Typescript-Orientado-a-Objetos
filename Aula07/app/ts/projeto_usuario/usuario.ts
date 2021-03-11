import { EmailInvalidoError } from "./errors/emailinvalidoerror";
import { NomeInvalidoError } from "./errors/nomeinvalidoerror";

export class Usuario{
    public email: string;
    public nome: string;

    private constructor(email: string, nome: string){
        this.email  = email;
        this.nome = nome;
    }

    public static criarUsuário(email: string, nome:string): Usuario{
        //teste para validar email
        if(!this.emailInvalido(email)){
            //lançando exceção
            throw new EmailInvalidoError();
        }


        //teste para validar nome
        if(!this.nomeInvalido(nome)){
            //lançando exceção
            throw new NomeInvalidoError();
        }
        return new Usuario(email, nome);
    }

    private static emailInvalido(email:string):boolean{
        let emailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        return emailRegex.test(email);

    }

    private static nomeInvalido(nome:string){
        if(nome.length > 20 || nome == ""){
            return false;
        }
        return true;
    }
}
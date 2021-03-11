import { Direcao } from "./direcao";
import { Motor } from "./motor";
import {Modelo} from "./modelo";

export class Veiculo{
    private _motor: Motor;
    private _direcao: Direcao;
    private _modelo: Modelo;

    constructor(){
        this._motor = new Motor();
        this._direcao = new Direcao();
        this._modelo = new Modelo();
    }

    public get motor(): Motor{
        return this._motor;
    }

    public set motor(motor: Motor){
        this._motor = motor;
    }
    
    public get direcao() : Direcao {
        return this._direcao;
    }

    
    public set direcao(direcao : Direcao) {
        this._direcao = direcao;
    }
    
    
    public get modelo() : Modelo {
        return this._modelo
    }

    
    public set modelo(modelo : Modelo) {
        this._modelo = modelo;
    }
    
    
    
}
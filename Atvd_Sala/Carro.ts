import { Veiculos } from "./Veiculos";

class Carro extends Veiculos{
    portas: number;

    constructor(_portas: number, _marca: string, _modelo: string){
        
        super(_marca, _modelo);
        this.portas = _portas;
    }

}

let carro = new Carro(4, 'fiat', 'Argo');
carro.Apresentar();

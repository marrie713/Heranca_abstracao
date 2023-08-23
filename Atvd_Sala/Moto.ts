import { Veiculos } from "./Veiculos";

class Moto extends Veiculos{
    cilindradas: number;

    constructor(_cilindradas: number, _marca: string, _modelo: string){

        super(_marca, _modelo);
        this.cilindradas = _cilindradas;
    }

} 

let moto = new Moto(2, 'hyundai', '??');
moto.Apresentar();

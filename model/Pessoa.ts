class Pessoa{
    nome: String;
    data_nasc: Date;
    altura: number;

    constructor(_nome: String, _data_nasc: Date, _altura: number){
        this.nome = _nome;
        this.data_nasc = _data_nasc;
        this.altura = _altura;
    }

    Idade(){
        this.data_nasc.toDateString
    }
}


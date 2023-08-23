class Viagem{
    partida: String;
    destino: String;
    hr_partida: Date;
    hr_chegada: Date;
    transporte: String;
    tempo_hospedagem: Date[];
    volta: String;
    hr_volta: Date;
    preco: number;

    constructor(_partida: String,
        _destino: String,
        _hr_partida: Date,
        _hr_chegada: Date,
        _transporte: String,
        _tempo_hospedagem: Date[],
        _volta: String,
        _hr_volta: Date,
        _preco: number){

            this.partida = _partida ?? '';
            this.destino = _destino ?? '';
            this.hr_partida = _hr_partida ?? new Date();
            this.hr_chegada = _hr_chegada ?? new Date();
            this.transporte = _transporte ?? '';
            this.tempo_hospedagem = _tempo_hospedagem ?? [];
            this.volta = _volta ?? '';
            this.hr_volta = _hr_volta ?? new Date();
            this.preco = _preco ?? 0;


    }
}

let nova_viagem = new Viagem('aeroporto A',
                    'aeroporto B',          
                    new Date(),
                    new Date(),
                    'aviao',
                    [new Date(),
                    new Date(), 
                    new Date()], 
                    'aeroporto B', 
                    new Date(),
                    5000);

console.log(nova_viagem.hr_chegada.toLocaleString('pt-br', {timeZone: "America/New_York", hour: '2-digit', minute: '2-digit' }));
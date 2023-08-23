var Viagem = /** @class */ (function () {
    function Viagem(_partida, _destino, _hr_partida, _hr_chegada, _transporte, _tempo_hospedagem, _volta, _hr_volta, _preco) {
        this.partida = _partida !== null && _partida !== void 0 ? _partida : '';
        this.destino = _destino !== null && _destino !== void 0 ? _destino : '';
        this.hr_partida = _hr_partida !== null && _hr_partida !== void 0 ? _hr_partida : new Date();
        this.hr_chegada = _hr_chegada !== null && _hr_chegada !== void 0 ? _hr_chegada : new Date();
        this.transporte = _transporte !== null && _transporte !== void 0 ? _transporte : '';
        this.tempo_hospedagem = _tempo_hospedagem !== null && _tempo_hospedagem !== void 0 ? _tempo_hospedagem : [];
        this.volta = _volta !== null && _volta !== void 0 ? _volta : '';
        this.hr_volta = _hr_volta !== null && _hr_volta !== void 0 ? _hr_volta : new Date();
        this.preco = _preco !== null && _preco !== void 0 ? _preco : 0;
    }
    return Viagem;
}());
var nova_viagem = new Viagem('aeroporto A', 'aeroporto B', new Date(), new Date(), 'aviao', [new Date(),
    new Date(),
    new Date()], 'aeroporto B', new Date(), 5000);
console.log(nova_viagem.hr_chegada.toLocaleString('pt-br', { timeZone: "America/New_York", hour: '2-digit', minute: '2-digit' }));

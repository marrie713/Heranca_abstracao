"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculos = void 0;
var Veiculos = /** @class */ (function () {
    function Veiculos(_marca, _modelo) {
        this.marca = _marca;
        this.modelo = _modelo;
    }
    Veiculos.prototype.Apresentar = function () {
        console.log(this.marca, this.modelo);
    };
    return Veiculos;
}());
exports.Veiculos = Veiculos;

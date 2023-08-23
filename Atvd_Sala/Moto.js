"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculos_1 = require("./Veiculos");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(_cilindradas, _marca, _modelo) {
        var _this = _super.call(this, _marca, _modelo) || this;
        _this.cilindradas = _cilindradas;
        return _this;
    }
    return Moto;
}(Veiculos_1.Veiculos));
var moto = new Moto(2, 'hyundai', '??');
moto.Apresentar();

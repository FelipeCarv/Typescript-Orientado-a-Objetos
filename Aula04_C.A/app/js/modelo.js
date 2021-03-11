"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modelo = void 0;
var Modelo = /** @class */ (function () {
    function Modelo() {
    }
    Object.defineProperty(Modelo.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Modelo.prototype, "modeloV", {
        set: function (modelo) {
            this._modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    return Modelo;
}());
exports.Modelo = Modelo;

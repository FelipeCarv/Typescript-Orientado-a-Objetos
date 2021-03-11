"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direcao = void 0;
var Direcao = /** @class */ (function () {
    function Direcao() {
    }
    Object.defineProperty(Direcao.prototype, "corD", {
        get: function () {
            return this._cor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direcao.prototype, "cor", {
        set: function (cor) {
            this._cor = cor;
        },
        enumerable: false,
        configurable: true
    });
    return Direcao;
}());
exports.Direcao = Direcao;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailInvalidoError = void 0;
var EmailInvalidoError = /** @class */ (function () {
    function EmailInvalidoError() {
        this.name = "EmailInvalidoError";
        this.message = "Email inválido";
    }
    EmailInvalidoError.prototype.toString = function () {
        return this.name + " : " + this.message;
    };
    return EmailInvalidoError;
}());
exports.EmailInvalidoError = EmailInvalidoError;

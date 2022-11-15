"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Client.ts
var Client = /** @class */ (function () {
    function Client(name) {
        this._name = String();
        this.name = name;
    }
    Object.defineProperty(Client.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (value.length < 3) {
                throw new Error('O nome deve conter no mínimo 3 caracteres.');
            }
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Client;
}());
exports.default = Client;

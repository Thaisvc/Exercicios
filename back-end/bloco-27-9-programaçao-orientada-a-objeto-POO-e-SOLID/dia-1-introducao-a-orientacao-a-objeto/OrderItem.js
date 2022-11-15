"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// OrderItem.ts
var OrderItem = /** @class */ (function () {
    function OrderItem(name, price) {
        this._name = name;
        this._price = price;
    }
    Object.defineProperty(OrderItem.prototype, "name", {
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
    Object.defineProperty(OrderItem.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('O preço deve ser positivo.');
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    return OrderItem;
}());
exports.default = OrderItem;

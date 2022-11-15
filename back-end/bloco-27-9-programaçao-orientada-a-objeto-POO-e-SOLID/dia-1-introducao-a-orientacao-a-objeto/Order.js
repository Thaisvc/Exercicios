"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order = /** @class */ (function () {
    function Order(client, items, paymentMethod, discount) {
        this._items = [];
        this._discount = 0;
        this._client = client;
        this.items = items;
        this._paymentMethod = paymentMethod;
        this.discount = discount;
    }
    Object.defineProperty(Order.prototype, "client", {
        get: function () {
            return this._client;
        },
        set: function (value) {
            this._client = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            if (value.length === 0) {
                throw new Error('O pedido deve ter pelo meno um item.');
            }
            this._items = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "paymentMethod", {
        get: function () {
            return this._paymentMethod;
        },
        set: function (value) {
            this._paymentMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "discount", {
        get: function () {
            return this._discount;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('O desconto não pode ser um valor negativo.');
            }
            this._discount = value;
        },
        enumerable: false,
        configurable: true
    });
    return Order;
}());
exports.default = Order;

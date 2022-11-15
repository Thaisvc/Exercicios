"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//index.ts
var Client_1 = require("./Client");
var Order_1 = require("./Order");
var OrderItem_1 = require("./OrderItem");
var client = new Client_1.default('João');
var sandwich = new OrderItem_1.default('Sanduíche Natural', 5.00);
var juice = new OrderItem_1.default('Suco de Abacaxi', 5.00);
var dessert = new OrderItem_1.default('Gelatina de Uva', 2.50);
var order = new Order_1.default(client, [sandwich, juice, dessert], 'dinheiro', 0.10);
console.log(order);

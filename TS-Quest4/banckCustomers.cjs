"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
// ... Ton code ici ...
var BankCustomer = /** @class */ (function () {
    function BankCustomer(name, code) {
        this.name = name;
        this.secretCode = code;
    }
    BankCustomer.prototype.getName = function () {
        return this.name;
    };
    BankCustomer.prototype.verifyPinInput = function (code) {
        if (this.secretCode == code) {
            return true;
        }
        else
            return false;
    };
    return BankCustomer;
}());
// Tests
var customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));

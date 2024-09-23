"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        return "I am ".concat(this.name);
    };
    Person.prototype.tellMyAge = function () {
        return "I am ".concat(this.age, " years old");
    };
    return Person;
}());
exports.Person = Person;

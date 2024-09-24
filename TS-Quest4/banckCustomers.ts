import assert = require("assert")

// ... Ton code ici ...
class BankCustomer{
    private name: string;
    private secretCode: string;

    constructor(name: string, code :string){
            this.name=name
            this.secretCode=code
    }

     getName():string{
        return this.name
    }
    verifyPinInput(code: string){
        if(this.secretCode==code){
            return true
        }
        else return false
    }
}

// Tests
const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));




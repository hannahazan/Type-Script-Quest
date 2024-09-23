export class Person{
    private name: string;
    private age: number;

    constructor(name:string,age:number){
            this.name = name
            this.age = age
    }

    tellMyName():string{
        return `I am ${this.name}`
    }

    tellMyAge():string{
        return `I am ${this.age} years old`
    }
}
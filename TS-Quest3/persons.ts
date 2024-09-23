import {Person} from './Person'

const Mary= new Person("Mary",35)
const John= new Person("John",40)

const MaryAge=Mary.tellMyAge()
const MaryName=Mary.tellMyName()

const JohnAge=John.tellMyAge()
const JohnName=John.tellMyName()

console.log(MaryAge)
console.log(MaryName)
console.log(JohnAge)
console.log(JohnName)

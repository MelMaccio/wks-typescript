import { NumericLiteral } from "typescript";

//tipado inferido
let mati = {
    nombre: 'Matias',
    edad: 29
}

//tipado explicito?

interface Persona {
    nombre: string;
    edad: number
}

let franco: Persona = {
    nombre: "Franco",
    edad: 27
}

interface Estudiante extends Persona {
    esActivo: boolean
}

let diego: Estudiante = {
    nombre: "Diego",
    edad: 29,
    esActivo: false //que pasa si comento alguno?
}

// Investiga la palabra reservada implements
// class conformed by a certain interface
interface A {
    propA : string,
    propB : number
}
class Example implements A {
    propA = 'Hello World';
    propB = 2022
}
const obj = new Example()

// Existe otra alternativa para realizar lo mismo?
// Si, types.


type Person = {
    name: string,
    age: number
}

type Student = Person & {
    isActive: boolean;
}

let Fede: Student = {
    name: 'Fede',
    age: 29,
    isActive: false
}

//Investiga sus diferencias
// type nombre = string ---> se puede declarar como dato primitivo, interface no
// type no se puede duplicar, interfaz si y luego se combinan
// Su forma de union es diferente
// type typeTwo = typeOne & --->  uses &
// interface Two extends One ---> uses extends
export {}
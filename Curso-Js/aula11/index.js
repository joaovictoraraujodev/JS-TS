// Tipos primitivos

const myName = "João"; // String
const surName = "Araújo"; // String
const myYear = 24; // Number INT
const myHeight = 1.81; // Number Float
const validation = true; // Boolean
let nomeAluno; // Undefined = não aponta para locar na memoria
let sobrenomeAluno = null; // Null = não aponta para locar na memoria

// Tipo de dado passado por referencia.
const a = [1, 2];
const b = a;

b.push(3);
console.log(a, b)
const students = ["Luiz", "Maria", "João"];
console.log(students);
console.log(students[0]);
console.log(students[2]);
students[3] = "Eduardo"; // adiciona eduardo, mas não é a melhor forma de fazer
console.log(students);
console.log(students.length);
students.push("Pedro"); // adiciona o nome no final da lista.
students.unshift("Lucas"); // adiciona o nome no inicio, mudando o indice da lista.
const removed = students.pop(); //remove do final
students.shift(); //remove do inicio
console.log(removed);
console.log(students);
const fruits = ["Banana", "Maça", "Uva"];
fruits.push("Tomate");
fruits.push("Abacaxi");
console.log(fruits);
console.log(fruits.slice(0, 3)); // fatiamento
console.log(fruits.slice(0, -1)); //fatiamento
delete fruits[1];
console.log(fruits);
console.log(fruits instanceof Array);

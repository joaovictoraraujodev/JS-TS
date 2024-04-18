let name = "João";
name = "Caroline";
console.log(name[0]);

let a = "A";
let b = a; // Cópia
console.log(a, b);

a = "Outra coisa";
console.log(a, b);

let c = [1, 2, 3];
let d = c;
console.log(c, d);

c.push(4); // d foi afetado por essa linha, estão apontando pro mesmo valor.
console.log(c, d);

d.pop();
console.log(c, d);

let fruits = ["Banana", "Maça", "Pera"];
let fruits2 = [...fruits]; // vira independente.

fruits.push("Amora");
console.log(fruits, fruits2);

const people = {
  name: "João",
  surname: "Araújo",
};

const people2 = people;
people.name = "Luiz"; // substitui.
console.log(people2);

const people3 = { ...people }; // assim mantém mesmo que a gente faça algum tipo de alteração posterior.

const array = [1, 2, 3];
array.push(4);
array[0] = "Luiz";
console.log(array);

const name = "João";
const surname = "Araújo";
const year = 24;

const name2 = "Caroline";
const surname2 = "Caetano";
const year2 = 28;

const people = {
  name: "João",
  surname: "Araújo",
  year: 24,
};

const people2 = {
  name: "Caroline",
  surname: "Caetano",
  year: 28,
};

console.log(people.year);

function createPeople(name, surname, year) {
  return {
    name,
    surname,
    year,
  };
}

const people3 = createPeople("João", "Araújo", 24);
const people4 = createPeople("Paulo", "Couto", 32);
const people5 = createPeople("Jean", "Cesar", 14);
const people6 = createPeople("Matheus", "Junior", 84);
console.log(people3.surname, people4.name, people5.year);

const people7 = {
  name: "João",
  surname: "Araújo",
  year: 24,

  talk() {
    console.log(
      `${this.name} ${this.surname} de ${this.year} anos, está falando oi...`
    );
  },
  incrementYear() {
    this.year++;
  },
};

people7.talk();
people7.incrementYear();
people7.talk();
people7.incrementYear();
people7.talk();

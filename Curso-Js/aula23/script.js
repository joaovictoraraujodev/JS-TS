function salute(name) {
  return `Good morning! ${name}`;
}

const variable = salute("João");

console.log(variable);

function sum(x, y) {
  const result = x + y;
  return result;
}

console.log(sum(4, 5));
console.log(sum(10, 5));
console.log(sum(20, 10));

function multiplication(x = 2, y = 1) {
  const result = x * y;
  return result;
}

console.log(multiplication(3, 2));

const root = function (n1) {
  return n1 ** 0.5;
};

console.log(root(9));

const division = (n2) => {
  return n2 / 2;
};
console.log(division(10));

let n1 = 9.54234;
let n2 = Math.floor(n1); // arredonda para baixo
console.log(n2);
n2 = Math.ceil(n1); // arredonda para cima
console.log(n2);
n2 = Math.round(n1);
console.log(n2);
console.log(Math.max(1, 2, 3, 4, 5, 10, 1500)); // mostra o maior número de uma lista
console.log(Math.min(1, 2, 3, 4, -50, 1500)); // mostra o menor número de uma lista 
console.log(Math.random()); // número aleatorio entr 0 e 1
let aleatorio = Math.random() * (10 - 5) + 5; // número aleatorio entre 10 e 5
aleatorio = Math.round(Math.random() * (10 - 5) + 5); // arredonda o número aleatorio
console.log(aleatorio);
console.log(Math.PI);
console.log(Math.pow(2, 10)); // 2 ** 10
// raiz quadrada
let n3 = 9;
console.log(n3 ** (1 / 2)); // ou 0.5
console.log(100 / 0); // infinity é o 0 absoluto, avalia como true (!!)

let n1 = 15.2389;
let n2 = 12;
console.log(n1.toString() + n2);
//n1 = n1.toString();
console.log(typeof n1);
console.log(n1.toString(2));
console.log(n1.toFixed(2)); // arredondar
console.log(Number.isInteger(n1)); // verificar se o número é inteiro
let temp = n1 * "Olá";
console.log(Number.isNaN(temp)); // NaN, facilmente tratavel
let n3 = 0.7;
let n4 = 0.1;
console.log(n3 + n4); // conta imprecisa
n3 += n4; // 0.8
n3 += n4; // 0.9
n3 += n4; // 1
n3 += n4; // 1.1
n3 += n4; // 1.2
n3 += n4; // 1.3
n3 += n4; // 1.4
n3 += n4; // 1.5
n3 += n4; // 1.6
n3 += n4; // 1.7
n3 += n4; // 1.8
n3 += n4; // 1.9
n3 += n4; // 2
console.log(n3);
n3 = parseFloat(n3.toFixed(2));
console.log(n3);
let n5 = 0.4;
let n6 = 0.1;

// Essa é uma outra forma de fazer
n5 = (n5 * 100 + n6 * 100) / 100; 
n5 = (n5 * 100 + n6 * 100) / 100;
n5 = (n5 * 100 + n6 * 100) / 100;
n5 = (n5 * 100 + n6 * 100) / 100;
n5 = (n5 * 100 + n6 * 100) / 100;
n5 = (n5 * 100 + n6 * 100) / 100;
console.log(n5);

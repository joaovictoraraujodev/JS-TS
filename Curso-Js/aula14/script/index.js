alert(
  "Esse é um programa para soma de dois valores, digite os valores nas seguintes etapas."
);
let n1 = prompt("Digite o primeiro valor para soma: ");
let converterN1 = Number(n1);
let n2 = prompt("Digite o segundo valor: ");
let converterN2 = Number(n2);
let total = converterN1 + converterN2;
alert(`O resultado da soma ${n1} + ${n2} é igual a ${total}`);

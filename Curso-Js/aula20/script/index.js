const number = Number(prompt("Digite um número:"));
const titleNumber = document.getElementById("title-number");
const text = document.getElementById("text");

titleNumber.innerHTML = number;
text.innerHTML += `<p>A Raiz quadrada do seu número é: ${
  number ** (1 / 2)
}</p>`;
text.innerHTML += `<p> O número ${number}, é inteiro? ${Number.isInteger(
  number
)}</p>`;
text.innerHTML += `<p> O número ${number} é NaN? ${isNaN(number)} </p>`;
text.innerHTML += `<p> Arredondando para baixo ${Math.floor(number)} </p>`;
text.innerHTML += `<p> Arredondando para cima ${Math.ceil(number)} </p>`;
text.innerHTML += `<p>Com duas casas decimais ${number.toFixed(2)}</p>`;

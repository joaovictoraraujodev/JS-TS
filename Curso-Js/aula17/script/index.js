const yourName = prompt("Digite seu nome completo:");
document.body.innerHTML += `Seu nome é ${yourName} <br />`;
document.body.innerHTML += `Seu nome possui ${yourName.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é ${yourName.charAt(
  1
)} <br />`;
document.body.innerHTML += `O primeiro indice da letra V no seu nome é ${yourName.indexOf(
  "V"
)} <br />`;
document.body.innerHTML += `O último indice da letra D no seu nome é ${yourName.lastIndexOf(
  "D"
)} <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${yourName.slice(
  -3
)} <br />`;
document.body.innerHTML += `As palavras do seu nome são: ${yourName.split(" ")} <br / >`;
document.body.innerHTML += `Seu nome em letras maiúsculas ${yourName.toLocaleUpperCase()} <br />`;
document.body.innerHTML += `Seu nome em letras minúsculas ${yourName.toLocaleLowerCase()} <br />`;

function meuEscopo() {
  const form = document.querySelector(".form");
  const result = document.querySelector(".result");

  const pessoas = [];

  //  form.onsubmit = function (event) {
  //    event.preventDefault();
  //    alert(1);
  ////    console.log("Foi enviado.");
  //  };
  //}

  function recebeEventoForm(event) {
    event.preventDefault();
    const nome = form.querySelector(".name");
    const sobrenome = form.querySelector(".surname");
    const peso = form.querySelector(".weight");
    const altura = form.querySelector(".height");

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });

    console.log(pessoas);

    result.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
  }
  form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();

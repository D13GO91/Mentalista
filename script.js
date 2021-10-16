var numeroSecreto;

function Iniciar() {
  var tentativas = 3;

  document.getElementById("tentativas").innerHTML =
    "Você possui " + tentativas + " tentativas";
  document.getElementById("valor").value = "";

  document.getElementById("resultado").innerHTML = "";

  numeroSecreto = parseInt(Math.random() * 11);
}

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);

  for (tentativas = 2; tentativas > 0; ) {
    if (chute == numeroSecreto) {
      document.getElementById("resultado").innerHTML = "Parabéns, Você acertou";
      break;
    } else if (chute < numeroSecreto) {
      chute = prompt("O numero secreto é maior, tente novamente");
      tentativas = tentativas - 1;

      document.getElementById("tentativas").innerHTML =
        "Você possui " + tentativas + " tentativas";
    } else if (chute > numeroSecreto) {
      chute = prompt("O numero secreto é menor, tente novamente");
      tentativas = tentativas - 1;

      document.getElementById("tentativas").innerHTML =
        "Você possui " + tentativas + " tentativas";
    }

    if (chute == numeroSecreto) {
      document.getElementById("resultado").innerHTML = "Parabéns, Você acertou";
      document.getElementById("valor").value = "";
    } else {
      document.getElementById("resultado").innerHTML =
        "Acabou suas tentativas, O número secreto era " +
        numeroSecreto +
        " clique em iniciar e tente de novo";
      document.getElementById("valor").value = "";
    }
  }
}

/* Base
let tentativas = 3;
document.querySelector(
  "#tentativas"
).innerText = `Tentativas restantes: ${tentativas}`;

let numeroSecreto = Math.round(Math.random() * (10 - 1) + 1);

function button() {
  const input = document.querySelector("input");

            if (tentativas < 1) {
        alert('Suas tentativas acabaram!')
                    setTimeout(function() {
          window.location.reload(true)
      }, 1)
      } else {
  
  if (
    parseInt(input.value) > 10 ||
    parseInt(input.value) <= 0 ||
    input.value == ""
  ) {
    alert("Valor inválido! Digite novamente.");
  } else {
    if (parseInt(input.value) == numeroSecreto) {
      document.querySelector("p").innerText = "Resposta certa, parabéns! :D";

      tentativas = 3;

      document.querySelector(
        "#tentativas"
      ).innerText = `Tentativas restantes: ${tentativas}`;
     
      document.querySelector("p").classList.add("acertou");
      
      setTimeout(function() {
          window.location.reload(true)
      }, 1500)
    } else if (parseInt(input.value) < numeroSecreto) {
      document.querySelector("p").innerText = "O número secreto é maior!";

      tentativas -= 1;
      document.querySelector(
        "#tentativas"
      ).innerText = `Tentativas restantes: ${tentativas}`;
      document.querySelector("p").classList.add("errou");
    } else if (parseInt(input.value) > numeroSecreto) {
      document.querySelector("p").innerText = "O número secreto é menor!";

      tentativas -= 1;
      document.querySelector(
        "#tentativas"
      ).innerText = `Tentativas restantes: ${tentativas}`;
      document.querySelector("p").classList.add("errou");
      */
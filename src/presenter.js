import totalizador from "./totalizador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#anio-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + "Cantidad por   Item: "+ totalizador(firstNumber) + " Precio por   Item: "+  +totalizador(secondNumber) +  "</p>";
});

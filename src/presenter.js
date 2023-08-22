import bisiesto from "./bisiesto";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#anio-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);

  div.innerHTML = "<p>" + bisiesto(firstNumber) + "</p>";
});

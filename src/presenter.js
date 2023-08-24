import totalizador from "./totalizador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#anio-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#resultado2-div");
const optionsSelect = document.getElementById("options");
const optionsContainer = document.getElementById("options-container");

function scrollToOption(optionValue) {
  const optionElement = document.querySelector(`option[value="${optionValue}"]`);
  optionElement.scrollIntoView({ behavior: "smooth", block: "center" });
  return optionElement.textContent; // Devolvemos el contenido del elemento seleccionado
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  const selectedOption = optionsSelect.value;
  const selectedOptionText = scrollToOption(selectedOption);

  div2.innerHTML = "<p>" + "Estado: " + selectedOptionText + "</p>";
  div.innerHTML = "<p>" + "Cantidad por Item: " + totalizador(firstNumber) + " Precio por Item: " + totalizador(secondNumber) + "</p>";
});

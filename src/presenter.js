import { totalizador, multiplicar } from "./totalizador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#anio-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#resultado2-div");
const optionsSelect = document.getElementById("options");
const optionsContainer = document.getElementById("options-container");
const resultadoDiv = document.getElementById("resultado3-div");
const div4 = document.getElementById("resultado4-div");

function scrollToOption(optionValue) {
  const optionElement = document.querySelector(`option[value="${optionValue}"]`);
  optionElement.scrollIntoView({ behavior: "smooth", block: "center" });
  return optionElement.textContent;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  const selectedOption = optionsSelect.value;
  const selectedOptionText = scrollToOption(selectedOption);
  const precioNeto = multiplicar(firstNumber, secondNumber);
  const impuestoCA = multiplicar(precioNeto, 0.0825); // 8.25% de impuesto en CA
  const precioTotalConImpuesto = precioNeto + impuestoCA;

  div2.innerHTML = "<p>" + "Estado: " + selectedOptionText + "</p>";
  div.innerHTML = "<p>" + "Cantidad por Item: " + totalizador(firstNumber) + " - Precio por Item: " + totalizador(secondNumber) + "</p>";
  div4.innerHTML = "<p>" + "Precio Neto: " + totalizador(precioNeto) + "</p>";
  resultadoDiv.innerHTML = "<p>" + "Precio Total con Impuesto (CA): " + totalizador(impuestoCA) + "</p>";
});

optionsSelect.addEventListener("change", function () {
  const selectedOption = optionsSelect.value;
  let taxPercentage = 0;

  switch (selectedOption) {
    case "CA": // CA
      taxPercentage = 8.25;
      break;
    case "TX": // TX
      taxPercentage = 6.25;
      break;
    case "NV": // NV
      taxPercentage = 8.00;
      break;
    case "UT": // UT
      taxPercentage = 6.65;
      break;
    case "AL": // AL
      taxPercentage = 4.00;
      break;
  }

  resultadoDiv.textContent = `El estado seleccionado tiene un impuesto del ${taxPercentage}%`;
});

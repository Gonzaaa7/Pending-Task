const duplicateButton = document.getElementById("duplicateButton");
const container = document.getElementById("container");
const originalDiv = document.getElementById("originalDiv");
duplicateButton.addEventListener("click", duplicateDiv);
let altura = 102;
let textoGuardado = "";
let clase= 0;

function duplicateDiv() {
  const input = document.getElementById("inputText");
  textoGuardado = input.value;
  console.log("Texto guardado: " + textoGuardado);
  const newDiv = originalDiv.cloneNode(true);
  const newTop = altura + 25;
  newDiv.style.display = `flex`;
  newDiv.style.top = `${newTop}px`;
  const h4Element = newDiv.querySelector("h4");
  h4Element.textContent = textoGuardado;
  container.appendChild(newDiv);
  altura = newTop - 1;
  input.value = " ";
}
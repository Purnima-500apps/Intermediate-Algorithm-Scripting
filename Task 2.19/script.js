function addTogether() {
  const [a,b] = arguments;
  if(typeof a !== "number" || typeof b !== "number" || arguments.length === 1) {
    return undefined
  } else {
    return a + b;
  }
}

let result = (addTogether(2,3));

function getOutput() {
  document.getElementById("output").textContent = result;
}
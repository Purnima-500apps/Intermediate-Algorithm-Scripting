function convertHTML(str) {
  
  const specialChar = {
    "&" : "&amp;",
    "<" : "&lt;",
    ">" : "&gt;",
    "<>" : "&lt;&gt;",
    "'" : "&apos;",
    '"' : "&quot;"
  }
  return str.split("").map(letter => specialChar[letter] || letter).join("");
}

let result = (convertHTML("Dolce & Gabbana"));

function getOutput() {
  document.getElementById("output").textContent = result;
}
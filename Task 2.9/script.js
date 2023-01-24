function fearNotLetter(str) {

  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let firstChar = str[0];
  let lastChar = str[str.length - 1]
  let firstIndex = alpha.indexOf(firstChar);
  let lastIndex = alpha.indexOf(lastChar);

  let string = alpha.slice(firstIndex, lastIndex + 1);
   
  let missingLetter = string.split("").filter(char => !str.includes(char)) 

  return missingLetter[0];
}

let result = (fearNotLetter("abce"));


function getOutput() {
  document.getElementById("output").textContent = result;
}
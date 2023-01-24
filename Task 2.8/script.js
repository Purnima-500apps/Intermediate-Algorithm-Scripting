function pairElement(str) {
  
  let pairs = {
    'A' : "T", 'T' : "A", 'C' : "G", 'G' : "C"
  }

  let arr = [];
  
  for(let char of str) {
   
    arr.push([char, pairs[char]])
  }

  return arr;

}

let result = (pairElement("GCG"));


function getOutput() {
  document.getElementById("output").textContent = result;
}
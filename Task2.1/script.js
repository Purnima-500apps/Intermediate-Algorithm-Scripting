function sumAll(arr) {
  let [a, b] = [...arr];
  //console.log(a)
  let maxNum = a > b ? a : b
  let minNum = a < b ? a : b
  let sum = 0;
  for( let i = minNum; i <= maxNum; i++) {
    sum += i;
  }
  
  return sum;
} 

let result = (sumAll([1, 4]));


function getOutput() {
  document.getElementById("output").textContent = result;
}
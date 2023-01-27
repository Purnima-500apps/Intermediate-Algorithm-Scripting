function commonMultiple(num1, num2) {
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);

  for(let i = max; i <= min * max; i += max) {
    if( i % min === 0) {
      return i;
    }
  }
}
function smallestCommons(arr) {
  let min =  Math.min(...arr);
  let max = Math.max(...arr);

  let temp = 1;
  for( let x = min; x <= max; x++ ) {
    temp = commonMultiple(temp, x);
  }
  return temp;
}

let result = (smallestCommons([1,5]));

function getOutput() {
  document.getElementById("output").textContent = result;
}
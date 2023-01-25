function smallestCommons(arr) {
  let max;
  let min;
if (arr[0] > arr[1]) {
    max = arr[0];
    min = arr[1];
  } else {
    min = arr[0];
    max = arr[1];
  }
let multiple = max;
  for (let i = min; i < max; i++) {
    if (multiple % i !== 0) {
      multiple += max;
      i = min - 1;
    } else if (i === max) {
      return multiple;
    }
  }
  return multiple;
}

let result = (smallestCommons([1,5]));

function getOutput() {
  document.getElementById("output").textContent = result;
}
function sumPrimes(num) {
  function primeNum(eachNum) {
   
    let count = 0;

    for (let i = 2; i <= Math.sqrt(eachNum); i++) {
      if (eachNum % i === 0)
        count+=1;
    }
    if(count === 0){
      return true
    }
  }

  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (primeNum(i))
      sum += i;
  }
  return sum;
}

let result = (sumPrimes(10));

function getOutput() {
  document.getElementById("output").textContent = result;
}
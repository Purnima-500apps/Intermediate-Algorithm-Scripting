function sumFibs(num) {
  let [a,b] = [0,1];
  
  let sum = 0;
  let arr=[1,];

  while(sum <= num) {
    sum = a + b;
    [a,b] = [b,sum];

    if(sum % 2 !== 0 && sum <= num) {
      arr.push(sum)
    }

  }
  return arr.reduce((a,b) => a + b);
}

let result = (sumFibs(4));

function getOutput() {
  document.getElementById("output").textContent = result;
}
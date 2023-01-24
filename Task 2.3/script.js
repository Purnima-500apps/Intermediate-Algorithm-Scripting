function destroyer(arr, ...rest) {
  let compareNum = [...rest];
  
   return(arr.filter(ele => !compareNum.includes(ele)));
 
}

let result = (destroyer([1, 2, 3, 1, 2, 3], 2, 3));



function getOutput() {
  document.getElementById("output").textContent = result;
}
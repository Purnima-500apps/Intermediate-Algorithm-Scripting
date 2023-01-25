function dropElements(arr, func) {
  let index =  arr.findIndex(func)
  //console.log(index)
  
  if(index < arr.length){
    arr.splice(0,index);
    return arr;
  } else {
    return [];
  } 
}

let result = (dropElements([1, 2, 3, 4], function(n) {return n >= 3; }));

function getOutput() {
  document.getElementById("output").textContent = result;
}
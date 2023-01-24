function diffArray(arr1, arr2) {
  const newArr = [];
  
  let concatArr = arr1.concat(arr2);
  let setArr = new Set(concatArr);

  for (let item of setArr) {
    if (!arr1.includes(item) || !arr2.includes(item)) newArr.push(item)
  }
  
  /*for(let item of arr2) {
    
    if(!arr1.includes(item)) {
      newArr.push(item);
    }
  }

  for( let item of arr1) {
    if(!arr2.includes(item)) {
      newArr.push(item);
    }
  }*/

    
  return newArr;
}
let result = (diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));



function getOutput() {
  document.getElementById("output").textContent = result;
}
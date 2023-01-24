function uniteUnique(...arr) {
  let newArr = [...arr];
  //console.log(newArr)
  let mergeArr = []
  for(let array of newArr){
    for( let num of array) {
      mergeArr.push(num);
    }
  }
  let set = new Set(mergeArr);
  let result = [...set];
  return result;

}

let result = (uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));


function getOutput() {
  document.getElementById("output").textContent = result;
}
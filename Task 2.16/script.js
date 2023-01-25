function steamrollArray(arr) {
  return arr.toString().replace(",,", ",").split(",").map(item => {
     if (item == "[object Object]") {
       return {};
     } else if (isNaN(item)) {
       return item;
     } else {
       return parseInt(item); 
     }
   });
  
  
  /*let arrString = arr.toString() // 1,[object object], 3, 4
  let stringReplace = arrString.replace(",,",','); // 1,3,4
  let splitString = stringReplace.split(","); // ['1','3','4']
  let result = splitString.map(item => {
     if(item == "[object object]") {
        return {};
     } else if ( isNaN(item) ) {  //if not a number
        return item;
     } else {
        return parseInt(item);
     }
  })
  return result;*/

}

let result = (steamrollArray([1, [], [3, [[4]]]]));


function getOutput() {
  document.getElementById("output").textContent = result;
}
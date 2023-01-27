function whatIsInAName(collection, source) {
  const souceKeys = Object.keys(source);
  
  const sourceValue = Object.values(source);
 
  let arr = []
  for (let obj of collection ) {
      
      for(let [key, value] of Object.entries(obj)) {
          if(key == souceKeys && value == sourceValue){
             
              arr.push(obj)
          }
      }
  }
  
  return arr;
}

let result = (whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

function getOutput() {
  document.getElementById("output").textContent = JSON.stringify(result);
}
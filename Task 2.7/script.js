function myReplace(str, before, after) {
  
  if (before[0] === before[0].toUpperCase()) {
     after = after.replace(after[0], after[0].toUpperCase());
   } else {
     after = after.replace(after[0], after[0].toLowerCase())
   }
 
   
   return str.replace(before, after);
 

  }

  let result = (myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));


function getOutput() {
  document.getElementById("output").textContent = result;
}
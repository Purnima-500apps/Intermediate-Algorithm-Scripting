function spinalCase(str) {
  /*if (str.includes(" ")) {
    return str.toLowerCase().split(" ").join("-");
  } else if( str.includes("_")) {
    return str.toLowerCase().split("_").join("-");
  } else{
    
  }*/

  return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}

let result = (spinalCase('This Is Spinal Tap'));


function getOutput() {
  document.getElementById("output").textContent = result;
}
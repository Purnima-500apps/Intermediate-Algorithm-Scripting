function truthCheck(collection, pre) {
  //console.log(collection[0][pre]);
  return collection.every( item => item[pre]);

}

let result = (truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"));

function getOutput() {
  document.getElementById("output").textContent = result;
}
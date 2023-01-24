function translatePigLatin(str) {
  const vowels = ['a','e','i','o','u']
  /*if( !(vowels.includes(str[0])) ) {
    let firstSTring = str.slice(1, str.length);
    return (firstSTring + str[0] + "ay");
  } else {
    return (str + "way");
  } */
  var index = [];
  let str2 = "";
  for( let char of str) {
    if(vowels.includes(char)) {
      index.push(str.indexOf(char));
      break;
    } else {
      str2 += char;
    }
  }
  

  let str1 = str.slice(index[0]);
  
  return  index[0] === 0 || index.length == 0 ? str + "way" : str1 + str2 + "ay";
  
  
}

let result = (translatePigLatin("consonant"));


function getOutput() {
  document.getElementById("output").textContent = result;
}
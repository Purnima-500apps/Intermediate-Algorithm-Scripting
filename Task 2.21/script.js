function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let piVal = 2 * Math.PI;
  let newArr = [];

  for (let ele in arr) {
    const orbitalPer = Math.round(piVal * Math.sqrt(Math.pow(arr[ele].avgAlt + earthRadius, 3) / GM));

    newArr.push({name: arr[ele].name, orbitalPeriod: orbitalPer});
  }

  return newArr;
}

const result = (orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

function getOutput() {
  document.getElementById("output").textContent = result;
}
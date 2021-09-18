function add(x, y) {
  return x + y;
}

function powerOutput(size, efficiency, data) {
  return (size * (efficiency / 100) * data).toFixed(2);
}

async function parseWholeYear(size, efficiency, yearData) {
  // 13 entries
  transformedArray = [];
  // console.log(yearData.);
  // yearData.forEach((element) => {
  //   transformedArray.add(powerOutput(size, efficiency, element));
  // });
  for (const key in yearData) {
    poweroutputdata = powerOutput(size, efficiency, yearData[key])
    transformedArray.push({key,poweroutputdata})
  }

  return transformedArray;
}

module.exports = { add, powerOutput, parseWholeYear };

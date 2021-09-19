function add(x, y) {
  return x + y;
}

function powerOutput(size, efficiency, data) {
  return (size * (efficiency / 100) * data).toFixed(2);
}

async function parseWholeYear(size, efficiency, yearData) {
  // 13 entries
  transformedArray = [];
  let properties
  // console.log(yearData.);
  // yearData.forEach((element) => {
  //   transformedArray.add(powerOutput(size, efficiency, element));
  // });
  for (const key in yearData) {
    var  months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    year = key.slice(0,4)
    month = key.slice(4,6)
    if(month !=13){
      var d = new Date(month);
      var monthName=months[d.getMonth()];
      poweroutputdata = powerOutput(size, efficiency, yearData[key])
      transformedArray.push({Date:monthName,MonthlyAverage:poweroutputdata})
    }else{
      a = poweroutputdata = powerOutput(size, efficiency, yearData[key])
      b = Math.max.apply(Math, transformedArray.map(function(o) { return o.MonthlyAverage; }))
      properties = {MaxYearlyOutput:b,AverageYearlyOutput:a}
    }
  }

  return {"data":transformedArray,"properties":properties};
}

module.exports = { add, powerOutput, parseWholeYear };

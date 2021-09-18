const app = require("express")();
var cors = require("cors");

const PORT = 8080;
const axios = require("axios");
const func = require("./functions");

app.use(cors);

var corsOptions = {
  origin: "*",
};

const result = func.add(4, 4);
console.log(result);

app.listen(PORT, () => console.log("Api is running on Port " + PORT));

app.get("/test", cors(corsOptions), async (req, res) => {
  try {
    const response = await axios({
      url: "https://power.larc.nasa.gov/api/temporal/daily/openapi.json",
      method: "get",
    });
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

app.get("/calc", async (req, res) => {
  const response = await axios({
    url: "https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=ALLSKY_SFC_SW_DWN&community=RE&longitude=26.1069&latitude=44.4433&start=2020&end=2020&format=JSON",
    method: "get",
  });
  func
    .parseWholeYear(5, 50, response.data.properties.parameter.ALLSKY_SFC_SW_DWN)
    .then((data) => {
      res.status(200).json(data);
    });
  console.log(req.query);
});

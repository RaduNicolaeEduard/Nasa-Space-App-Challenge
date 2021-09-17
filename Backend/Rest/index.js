const app = require("express")();
const PORT = 8080;
const axios = require('axios');
const func = require("./functions");

const result = func.add(4, 4);
console.log(result)

app.listen(PORT, () => console.log("Api is running on Port "+PORT));


app.get("/test", async (req, res) => {
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



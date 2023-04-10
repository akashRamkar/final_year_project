// import model_pass from "./key.js";
const OpenAI = require("openai");
const { Configuration, OpenAIApi } = OpenAI;
require("dotenv").config({ path: ".env.local" });

// const myModel = process.env.REACT_APP_MODEL;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;

// openai configuration
const configuration = new Configuration({
	organization: process.env.REACT_APP_ORG,
	apiKey: process.env.REACT_APP_MODEL_KEY,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
	res.send("sending response");
});

const AI_Assist = `summarise the below text short paragraphs\n`;
app.post("/", async (req, res) => {
	const { message } = req.body;
	if (message === "" || message === null) {
		res.json({
			message: null,
		});
	} else {
		const response = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: `${AI_Assist}{${message}}`,
			max_tokens: 300,
			temperature: 0.9,
		});
		// console.log(response.data);
		if (response.data.choices[0].text) {
			res.json({ message: response.data.choices[0].text });
		} else {
			res.json({
				message: "you didn't have any response received!!",
			});
		}
	}
});

app.listen(port, () => {
	console.log("we are listening to you!");
});

// ***************************************************

/*
// former package.json
 // "start": "react-scripts start",
    // "build": "react-scripts build",
    // "test": "react-scripts test",
    // "eject": "react-scripts eject"

*/
// /////////////////////////////////////////////

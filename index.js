// import model_pass from "./key.js";
const OpenAI = require("openai");
const { Configuration, OpenAIApi } = OpenAI;
const OpenAI_API_KEY = "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";

// Use the API_KEY variable in your code

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;

// openai configuration
const configuration = new Configuration({
	organization: "org-c7ZduPI7p7a94CabjMU2bEXV",
	apiKey: OpenAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
	res.send("sending response");
});

const AI_Assist = `summarise the below text in long paragraphs\n`;
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
			max_tokens: 2000,
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

// const express = require("express");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.get("/", (req, res) => {
// 	res.send("sending response");
// });
// app.post("/", (req, res) => {
// 	console.log(req.body.message);
// 	res.json({ message: `You sent: ${req.body.message}` });
// });

// app.listen(3001, () => {
// 	console.log("Server running on port 3001");
// });

/*
// former package.json
 // "start": "react-scripts start",
    // "build": "react-scripts build",
    // "test": "react-scripts test",
    // "eject": "react-scripts eject"

*/

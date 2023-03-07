const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
	res.send("sending response");
});
app.post("/", (req, res) => {
	// console.log(req.body.message);
	res.json({
		message: `Sending : ${req.body.message}`,
	});
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

// const uri =
// 	"mongodb+srv://akashrramkar2001:fjqXcPwVXBl8R2y7@cluster0.5fjxfqh.mongodb.net/?retryWrites=true&w=majority";
const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB database
MongoClient.connect("mongodb://localhost:27017/mydatabase", (err, client) => {
	if (err) throw err;

	// Define GET endpoint
	app.get("/api/data", (req, res) => {
		const collection = client.db("mydatabase").collection("mycollection");

		collection.find().toArray((err, data) => {
			if (err) throw err;

			res.send(data);
		});
	});

	// Start server
	app.listen(port, () => {
		console.log(`Server listening on port ${port}`);
	});
});

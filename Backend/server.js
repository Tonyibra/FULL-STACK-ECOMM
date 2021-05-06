const express = require("express");
const mongoose = require("mongoose");
const app = express();
const env = require("dotenv").config();
app.use(express.json());

//mongodb

mongoose.connect(process.env.MONGODB_URL, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", (err) => console.log({ message: err }));
db.on("open", () => console.log({ dbMessage: "Connected to database" }));

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});

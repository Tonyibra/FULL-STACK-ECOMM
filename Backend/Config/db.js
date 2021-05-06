const mongoose = require("mongoose");

const mongodb = async () => {
	try {
		const connect = await mongoose.connect(process.env.MONGODB_URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		console.log(`MongoDB Connected: ${connect.connection.host}`);
		const db = mongoose.connection;
		db.on("error", (err) => console.log({ message: err }));
		db.on("open", () => console.log({ dbMessage: "Connected to database" }));
	} catch (error) {
		console.log(error);
	}
};
module.exports = mongodb;

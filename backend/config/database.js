const mongoose = require("mongoose");

const connectDatabase = async () => {
	try {
		mongoose.set("strictQuery", false);
		const con = await mongoose.connect(process.env.CONNECTION_STRING);
		console.log(con.connection.host);
	} catch (err) {
		console.log("database connection err", err);
	}
};

module.exports = connectDatabase;

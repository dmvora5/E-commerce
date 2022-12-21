const Product = require("../models/produt");
const connectDatabase = require("../config/database");
const path = require("path");

require("dotenv").config({
	path: path.resolve(path.join("..", "config", "config.env")),
});

const products = [];

const seedData = async () => {
	try {
		await connectDatabase();
		console.log("db connected");

		await Product.deleteMany();
		console.log("delete all products");

		await Product.insertMany(products);

		process.exit(1);
	} catch (err) {
		console.log("err.message", err.message);
		process.exit(1);
	}
};

seedData();

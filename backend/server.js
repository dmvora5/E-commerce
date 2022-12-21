const app = require("./app");
const dotenv = require("dotenv");
const path = require("path");

const connectDatabase = require("./config/database");

dotenv.config({
	path: path.resolve(path.join("backend", "config", "config.env")),
});

const server = app.listen(process.env.PORT, async () => {
	await connectDatabase();
	console.log(`server running on port ${process.env.PORT}`);
});

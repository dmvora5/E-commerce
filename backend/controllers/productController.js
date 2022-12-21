const Product = require("../models/produt");

exports.getProducts = async (req, res, next) => {
	res.status(200).json({
		status: true,
		messege: "all products",
	});
};

exports.createProduct = async (req, res, next) => {
	const product = await Product.create(req.body);

	res.status(201).json({
		status: true,
		data: product,
	});
};

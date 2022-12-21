const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please enter product name"],
			trim: true,
			maxLength: [100, "Product name cannot exeed 100 characters"],
		},
		price: {
			type: Number,
			required: [true, "Please enter product price"],
			maxLength: [5, "Price cannot exeed 5 characters"],
			default: 0.0,
		},
		description: {
			type: String,
			required: [true, "Please enter product description"],
		},
		ratings: {
			type: Number,
			default: 0,
		},
		images: [
			{
				public_id: {
					type: String,
					required: true,
				},
				url: {
					type: String,
					required: true,
				},
			},
		],
		category: {
			type: String,
			required: [true, "Please enter category for product"],
			enum: {
				values: [
					"Electronics",
					"Cameras",
					"Laptop",
					"Accessories",
					"Headphones",
					"Food",
					"Books",
					"Clothes/Shoes",
					"Beaute/Health",
					"Sports",
					"Outdoor",
					"Home",
				],
				message: "Please select correct category",
			},
		},
		seller: {
			type: String,
			required: [true, "Please enter product seller"],
		},
		stock: {
			type: Number,
			required: [true, "Please enter product stock"],
			maxLength: [5, "Stock cannot exceed 5 charecter"],
			default: 0,
		},
		numOfReviews: {
			type: Number,
			default: 0,
		},
		reviews: [
			{
				name: {
					type: String,
					required: true,
				},
				rating: {
					type: Number,
					required: true,
				},
				comment: {
					type: String,
					required: true,
				},
			},
		],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Product", productSchema);

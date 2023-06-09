const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const urlSchema = new Schema(
	{
		shortUrl: {
			type: String,
			required: true,
		},
		longUrl: {
			type: String,
			required: true,
		},
		urlId: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Url", urlSchema);

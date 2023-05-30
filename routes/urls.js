const express = require("express");
const Url = require("../models/Url");
const GenerateShortenedUrl = require("../GenerateShortenedUrl");

const router = express.Router();

// GET all URLS
router.get("/", (req, res) => {
	res.json({ msg: "GET all URLs" });
});

// Create short url and save data to mongoDB
router.post("/shorten", async (req, res) => {
	// request body json parsed through middleware in server.js
	const { origUrl } = req.body;
	// base URL is the shorter URL (DNS)
	const baseUrl = process.env.BASE_URL;
	try {
		// Check if origUrl already exist in MongoDB. If exist, return Url, else, create a new document record
		let url = await Url.findOne({ longUrl: origUrl });
		if (url) {
			res.status(200).json(url);
		} else {
			// This method returns the original URL with http protocol and the shortened url
			const urlDataObj = GenerateShortenedUrl(origUrl, baseUrl);
			const url = await Url.create({
				longUrl: urlDataObj.longUrl,
				shortUrl: urlDataObj.shortenedUrl,
				urlId: urlDataObj.urlId,
			});
			res.status(200).json({ url: url });
		}
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

// redirect endpoint
router.get("/:urlId", async (req, res) => {
	try {
		const url = await Url.findOne({ urlId: req.params.urlId });
		if (url) {
			return res.redirect(url.longUrl);
		}
		res.status(200).json({ url: url });
	} catch (err) {
		res.status(404).json({ error: err.message });
	}
});

module.exports = router;

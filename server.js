// for dotenv package
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const urlRoutes = require("./routes/urls");

// Express app
const app = express();

// cors
app.use(cors({ origin: true, credentials: true }));

// middleware
app.use(express.json());

// Routes
app.use("/api", urlRoutes);

// connect to db
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		// listening to request until connected to MongoDB
		// Listen for request with a certain PORT
		app.listen(process.env.PORT, () => {
			console.log("Connected to DB & listening on port 4000...");
		});
	})
	.catch((err) => {
		console.log("Error:", err);
	});

// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
var mongoDB = process.env.MONGODB_URI || "mongodb://localhost/workout";

// Port
const PORT = process.env.PORT || 3000;
// Sets app as an express app.
const app = express();

// Convert app into data that can be transmitted over the internet.
app.use(express.urlencoded({ extended: true }));
// Allows app to receive json objects.
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT} 🤞`);
});

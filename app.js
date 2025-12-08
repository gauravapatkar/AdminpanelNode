const express = require("express");
const connectToDatabase = require("./data/database.js");
const routes = require("./routes/routes");
const cookieParser = require("cookie-parser"); 
const path = require("path");

const app = express();

// Connect to MongoDB
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(cookieParser());

// Routes
app.use("/", routes); 

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

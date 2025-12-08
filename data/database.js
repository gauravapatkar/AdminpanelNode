const mongoose = require("mongoose");
const Admin = require("../model/admins"); // Adjust the path as needed

// MongoDB connection URI
const uri =
  "mongodb+srv://gauravpatkark95_db_user:sPBkGU9drHOQwxQP@cluster0.1pbpw5d.mongodb.net/?appName=Cluster0";
// Connect to MongoDB using Mongoose
async function connectToDatabase() {
  try {
    await mongoose.connect(uri);
    console.log("Connected successfully to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

async function addAdmin(name, email, password, picture, bio) {
  try {
    // Create a new admin document
    const newAdmin = new Admin({
      name: name,
      email: email,
      password: password,
      picture: picture,
      bio: bio,
    });

    // Save the new admin document to the database
    await newAdmin.save();
    console.log("Admin saved successfully");
  } catch (err) {
    console.error("Error saving admin:", err);
    throw err; // Propagate the error
  }
}

module.exports = addAdmin;
connectToDatabase();

const mongoose = require("mongoose");
const Admin = require("../model/admins.js"); 

const uri =
"mongodb+srv://gauravpatkark95_db_user:Gaurav2519@cluster0.1pbpw5d.mongodb.net/?appName=Cluster0";
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
    const newAdmin = new Admin({
      name: name,
      email: email,
      password: password,
      picture: picture,
      bio: bio,
    });

    await newAdmin.save();
    console.log("Admin saved successfully");
  } catch (err) {
    console.error("Error saving admin:", err);
    throw err; 
  }
}

module.exports = addAdmin;
connectToDatabase();

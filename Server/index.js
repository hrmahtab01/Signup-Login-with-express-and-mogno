const express = require("express");
const cors = require("cors");
const connectdb = require("./Dbconfig/Connectdb");
const usermodel = require("./Model/usermodel");
const app = express();
const dotenv = require("dotenv").config();
const bcrypt = require("bcrypt");
connectdb();

app.use(express.json());
app.use(cors());

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await usermodel.findOne({ email });

    if (!user) {
      return res.status(400).send("User not found");
    }

    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        return res.status(500).send("Error comparing passwords");
      }

      if (result) {
        res.status(200).send("Login successfully");
      } else {
        res.status(400).send("Incorrect password");
      }
    });
  } catch (error) {
    res.status(500).send("Something went wrong during login");
  }
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    bcrypt.hash(password, 10, async function (err, hash) {
      if (err) {
        return res.status(500).send("Error hashing password");
      }
      const newUser = await usermodel.create({ name, email, password: hash });
      res.status(201).send("User created successfully");
    });
  } catch (error) {
    res.status(400).send("Something went wrong in creating user data");
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

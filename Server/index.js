const express = require("express");
const cors = require("cors");
const connectdb = require("./Dbconfig/Connectdb");
const usermodel = require("./Model/usermodel");
const app = express();
connectdb();

app.use(express.json());
app.use(cors());

app.post("/singup", async (req, res) => {
  try {
    const userdata = await usermodel.create(req.body);
    res.status(201).send("create user data seccessfully");
  } catch (error) {
    res.status(500).send("something went wrong in creating user data");
  }
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});

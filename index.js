require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./config/db");
const fs= require('fs')
//connect to DB
connectDB();

//init middleware

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  console.log("hii");
  res.send("Running");
});

app.use("/api/email", require("./routes/api/email"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server Runnnig"));

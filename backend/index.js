const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const register = require("./routes/register");
const login = require("./routes/login");

const products = require("./products");

const app = express();

require("dotenv").config();

app.use(express.json());//expand functionality of our application
app.use(cors());

app.use("/signup", register);
app.use("/login", login);

app.get("/", (req, res) => {
    res.send("Welcom to our online shop API");
});//(path,callback function)
app.get("/products", (req, res) => {
    res.send(products);
});
const port = process.env.PORT || 5000; //hay kere=mel eza 3000 port ma ken available byestaamel aya port mawjod 3end host
const uri = process.env.DB_URI;

app.listen(port, console.log(`Server running on port ${port}`));//configure our port

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then (() => console.log("MongoDB connection successful..."))
  .catch((err) => console.log("MongoDB connection failed", err.message));
  
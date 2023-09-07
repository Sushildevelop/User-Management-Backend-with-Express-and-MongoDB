require("dotenv").config()
const express = require("express");
const cors = require("cors");
const connectToDatabase = require('./config/db.js');
const userRoute = require("./routes/user.route.js");
connectToDatabase();

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', userRoute)


app.listen(process.env.PORT, () => {

    console.log("Server Started on PORT NO: ", process.env.PORT);
})
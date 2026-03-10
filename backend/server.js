const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const trainerRoutes = require("./routes/trainer");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads",express.static("uploads"));

let MONGO_URL = 'mongodb://localhost:27017/trainingapp'
MONGO_URL = 'mongodb+srv://mahesh:1234@cluster0.oaeoxws.mongodb.net/trainingapp'
mongoose.connect(MONGO_URL);

app.use("/api",trainerRoutes);

app.listen(5000,()=>{

 console.log("Server running");

});
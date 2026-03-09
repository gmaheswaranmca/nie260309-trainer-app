const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const trainerRoutes = require("./routes/trainer");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads",express.static("uploads"));

mongoose.connect("mongodb://localhost:27017/trainingapp");

app.use("/api",trainerRoutes);

app.listen(5000,()=>{

 console.log("Server running");

});
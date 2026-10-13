const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");

//Init Express
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//Connect till MongoDB
mongoose.connect("mongodb://localhost:27017/cv").then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log("Fel vid anslutning till databas: " + error);
})

//Workexperience Schema
const workexperienceSchema = new mongoose.Schema({
    companyname: {
        type: String, 
        required: true
    },
    jobtitle: {
        type: String, 
        required: true
    },
    location: {
        type: String, 
        required: true
    }
});

//Routes
app.get("/api", async (req, res) => {
    res.json({ message: "Välkommen till detta API!" });
});

app.listen(port, () => {
    console.log('Server har start på port: ' + port);
});
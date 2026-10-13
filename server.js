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
    },
    description: {
        type: String,
        required: false
    }
});

const Workexperience = mongoose.model("Workexperience", workexperienceSchema);

//Routes

//Get
app.get("/api", async (req, res) => {
    res.json({ message: "Välkommen till detta API!" });
});

app.get("/workexperiences", async (req, res) => {
    try {
        let result = await Workexperience.find({});

        return res.json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

//Post
app.post("/workexperiences", async (req, res) => {
    console.log("POST-anrop mottaget");
    console.log(req.body);


    const { companyname, jobtitle, location, description } = req.body;

    console.log(req.body);

    if (!companyname || !jobtitle || !location) {
        return res.status(400).json({
            message: "Arbetsgivare, arbetsroll och plats måste anges!"
        });
    }

    try {
        let result = await Workexperience.create(req.body);

        return res.json(result);
    } catch (error) {
        return res.status(400).json(error);
    }
});

//Put
app.put("/workexperiences/:id", async (req, res) => {
    const { companyname, jobtitle, location } = req.body;

    if (!companyname || !jobtitle || !location) {
        return res.status(400).json({
            message: "Arbetsgivare, arbetsroll och plats måste anges!"
        });
    }

    try {
        const result = await Workexperience.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        return res.json(result);
    } catch (error) {
        return res.status(400).json(error);
    }
});

//Delete
app.delete("/workexperiences/:id", async (req, res) => {
    try {
        const result = await Workexperience.findByIdAndDelete(
            req.params.id
        );

        if (!result) {
            return res.status(404).json({
                message: "Arbetserfarenhet hittades inte!"
            });
        }

        return res.status(200).json({
            message: "Arbetserfarenhet raderad!"
        });
    } catch (error) {
        return res.status(400).json(error);
    }
});

app.listen(port, () => {
    console.log('Server har start på port: ' + port);
});
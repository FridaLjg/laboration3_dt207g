const express = require('express');
const cors = require("cors");

//Init Express
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//Routes
app.get("/api", async (requestAnimationFrame, res) => {
    res.json({message: "Välkommen till detta API!"});
});

app.listen(port, () => {
    console.log('Server har start på port: ' + port);
});
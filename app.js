const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Root route – VERY IMPORTANT for Railway
app.get("/", (req, res) => {
    res.send("🚀 Node.js deployed successfully on Railway!");
});

// Example POST route
app.post("/save", (req, res) => {
    res.json({ message: "Data received", data: req.body });
});

// Railway will provide PORT automatically
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});

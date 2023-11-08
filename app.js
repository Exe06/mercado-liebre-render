require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"))

const port = process.env.PORT || 3030;

app.listen(port, () => 
    console.log(`Server is running on port: ${port}`)
);

app.get("/", (req, res) => 
    res.sendFile(__dirname + "/views/home.html")
);

app.get("/register", (req, res) => 
    res.sendFile(__dirname + "/views/register.html")
);

app.get("/login", (req,res) =>
    res.sendFile(__dirname + "/views/login.html")
);
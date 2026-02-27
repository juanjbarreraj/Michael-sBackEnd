require("dotenv").config();

const express = require ("express");
const libraryRoutes = require("./src/library/routes");

const app = express();
const port = 8004;

app.use(express.json());

const cors = require("cors");
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res)=> {
    res.send("Hello Point Park University");
})

// API Route
//http://localhost:8004/api/v1/library
//https://apiap-1.onrender.com/api/v1/library 
app.use("/api/v1/library", libraryRoutes);

app.listen(port, () => console.log(`running on ${port}`));

//test
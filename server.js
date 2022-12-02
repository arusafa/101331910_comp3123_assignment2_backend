const employeeRoutes = require("./routes/employees")
const mongoose = require("mongoose")
const express = require("express");
const app = express()
const PORT = process.env.PORT || 8000;
require("dotenv").config();
const cors = require("cors");

app.use(json())
app.use(cors())

connect("mongodb+srv://fall2022_comp3123:SAFA.aru1993@cluster0.lclqo7i.mongodb.net/comp3123_assignment2?retryWrites=true&w=majority", {

useNewUrlParser:true,
useUnifiedTopology:true
})

app.route("/hello")
    .get((req, res) => {
    res.send("Hello World from Safa Aru on hello route")
})

app.get("/", (req, res) => {
    res.send("Hello World from Safa Aru")
})

//employeeAPI
app.use("/api/", employeeRoutes)

//userRouter
import userRoutes from "./routes/users";
//userAPI
app.use("/api/", userRoutes)

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
    console.log("Press CTRL + C to stop server")
});






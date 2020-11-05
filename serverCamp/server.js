const express = require("express");
const morgan = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// import routes

const authRoutes = require("./routes/auth")
const camperRoutes = require("./routes/camper")
// app
const app = express();

// db


    mongoose
    .connect(process.env.CAMPER_DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,

    })
    .then(() => console.log("Camper DB connected"))
    .catch((err) => console.log(err));

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

// routes middleware


app.use("/api", authRoutes)
app.use("/api", camperRoutes)

// port
const port = process.env.PORT || 8002;

app.listen(port, () => console.log(`Server is running on port ${port}`));

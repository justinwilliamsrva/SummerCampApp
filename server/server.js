const express = require("express");
const morgan = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// app
const app = express();

// db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,

    })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

// route
app.get("*", (req, res) => {
    res.json({
        data: "You reached node.js api for reach node crud app",
    });
});

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

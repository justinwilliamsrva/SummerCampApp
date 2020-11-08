const express = require("express");
const morgan = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// import routes
const postRoutes = require("./routes/post")
const authRoutes = require("./routes/auth")

// app
const app = express();

// db
mongoose
    .connect(process.env.MESSAGE_DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,

    })
    .then(() => console.log("Message DB connected"))
    .catch((err) => console.log(err));


// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

// routes middleware

app.use("/api", postRoutes)
app.use("/api", authRoutes)


// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

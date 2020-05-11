const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys_dev").mongoURI;
const bodyParser = require("body-parser");
const users = require("./routes/api/users");
const passport = require("passport");
const path = require("path");

mongoose
    .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(passport.initialize());
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => { res.send("Hoi frens") })
app.use("/api/users", users)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));


// for heroku deployment

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("frontend/build"));
//     app.get("/", (req, res) => {
//         res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//     });
// }
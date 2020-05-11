const express = require("express");
const app = express();
const port =  process.env.PORT || 5000;
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

app.get("/", (req, res) => res.send("Hi it me. it werk"))
app.listen(port, () => console.log(`Server is running on port ${port}`));

// Uncomment below when we add in our MongoDB

// mongoose
//   .connect(db, { useNewUrlParser: true })
//   .then(() => console.log("Connected to MongoDB successfully"))
//   .catch((err) => console.log(err));

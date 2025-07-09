const mongoose = require("mongoose");

function connectToDB () {
    mongoose.connect("mongodb+srv://pmherwal:2wzXgLqyDXCCpGG0@cluster0.gu0g16o.mongodb.net/cohort")
    .then(() => {
        console.log("Connected to MongoDB successfully");
    })
}


module.exports = connectToDB;
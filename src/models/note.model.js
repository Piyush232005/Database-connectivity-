const mongoose = require("mongoose");
const noteSchema = new mongoose.Schema({
    title:String,
    content:String
}); 

const noteModel = mongoose.model("note",noteSchema);


module.exports = noteModel;
// This code defines a Mongoose schema and model for a "note" collection in MongoDB.
// The schema includes two fields: "title" and "content", both of which are strings   
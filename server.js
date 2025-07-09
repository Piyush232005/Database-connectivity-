const express = require("express");
const connectToDB = require("./src/db/db");
const noteModel = require("./src/models/note.model");

connectToDB();

const app = express();
app.use(express.json());

// POST /notes - Create a new note
app.post("/notes", async (req, res) => {
    const { title, content } = req.body;
    console.log(title, content);

    await noteModel.create({ title, content });

    res.json({
        message: 'Note created successfully'
    });
});

// GET /notes - Fetch all notes
app.get("/notes", async (req, res) => {
    const notes = await noteModel.find();
    res.json({
        message: 'Notes fetched successfully',
        notes
    });
});


app.delete("/notes/:id", async (req, res) => {
    const noteId = req.params.id;
    await noteModel.findByIdAndDelete({
        _id : noteId
    });

    res.json({
        message: 'Note deleted successfully'
    })
})
// ✅ Removed the incomplete line: app.

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

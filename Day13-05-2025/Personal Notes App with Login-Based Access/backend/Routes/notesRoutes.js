const express = require("express");
const fs = require("fs");
const { verification } = require("../Middleware/authMiddleware");
const path = require("path");
const notesRoutes = express.Router();

const notesPath = path.join(__dirname, "../data/notes.json");

notesRoutes.use(verification);
notesRoutes.get("/get", async (req, res) => {
  try {
    fs.readFile(notesPath, "utf8", async (error, data) => {
      let notes = [];
      let userID = req.userID;

      // console.log(userID, "User ID");
      if (!error && data) {
        try {
          notes = JSON.parse(data);
        } catch (error) {
          return res.status(500).send("Error parsing Notes data.");
        }
      }
      let userNotes = notes.filter((ele) => ele.userId === userID);
      // console.log(userNotes, "userNotes");
      res.status(200).send(userNotes);
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

notesRoutes.post("/add", async (req, res) => {
  try {
    const { title, content } = req.body;
    let userID = req.userID;
    if (!title || !content || !userID) {
      return res.status(400).send("Title, content, and userID are required.");
    }

    fs.readFile(notesPath, "utf8", (error, data) => {
      let notes = [];

      if (!error && data) {
        try {
          notes = JSON.parse(data);
        } catch (parseError) {
          return res.status(500).send("Error parsing notes data.");
        }
      }

      const newNote = {
        id: Date.now(),
        title,
        content,
        userId: userID,
        createdAt: new Date().toISOString(),
      };

      notes.push(newNote);

      fs.writeFile(notesPath, JSON.stringify(notes, null, 2), (writeErr) => {
        if (writeErr) {
          return res.status(500).send("Error writing note data.");
        }

        return res
          .status(201)
          .json({ message: "Note added successfully.", note: newNote });
      });
    });
  } catch (err) {
    res.status(500).send("Server error.");
  }
});

notesRoutes.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let userID = req.userID;

    fs.readFile(notesPath, "utf8", (error, data) => {
      if (error) {
        return res.status(500).send("Error reading notes data.");
      }

      let notes;
      try {
        notes = JSON.parse(data);
      } catch (parseError) {
        return res.status(500).send("Error parsing notes data.");
      }

      const initialLength = notes.length;

      // FIXED filtering logic
      const updatedNotes = notes.filter(
        (note) => !(note.id == id && note.userId == userID)
      );

      if (updatedNotes.length === initialLength) {
        return res.status(404).send("Note not found or unauthorized.");
      }

      fs.writeFile(
        notesPath,
        JSON.stringify(updatedNotes, null, 2),
        (writeErr) => {
          if (writeErr) {
            return res.status(500).send("Error writing notes data.");
          }
          res.status(200).send("Note deleted successfully.");
        }
      );
    });
  } catch (error) {
    res.status(500).send("Server error.");
  }
});

module.exports = { notesRoutes };

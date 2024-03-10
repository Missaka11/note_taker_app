const asyncHandler = require("express-async-handler");
const Note = require("../models/databaseSchema");

const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find();
  res.status(200).json(notes);
});

const postNotes = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a note");
  }
  Note.create({
    title: req.body.title,
    text: req.body.text,
  });
  res.status(200).json("Note added successfully");
});

const updateNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) {
    res.status(400);
    throw new Error("Note not found");
  }
  const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedNote);
});

const deleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) {
    res.status(400);
    throw new Error("Note not found");
  } else {
    await Note.deleteOne();
    res.status(200).json(req.params.id);
  }
});

module.exports = {
  getNotes,
  postNotes,
  updateNote,
  deleteNote,
};

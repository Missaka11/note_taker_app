const mongoose = require("mongoose");

const notesSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    text: {
      type: String,
      required: [true, "Please add a note"],
    },
  },
  {
    timeStamp: true,
  }
);
module.exports = mongoose.model("notes", notesSchema);

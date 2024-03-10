const express = require("express");
const {
  getNotes,
  postNotes,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");
const router = express.Router();

router.route("/").get(getNotes).post(postNotes);
router.route("/note/:id").put(updateNote).delete(deleteNote);

module.exports = router;

import { createNote } from "./Note/createNote.js";
import { deleteNote } from "./Note/deleteNote.js";
import { getOneNote } from "./Note/getOneNote.js";
import { getAllNotes } from "./Note/getAllNotes.js";
import { updateNote } from "./Note/updateNote.js";

const noteController = {
  create: createNote,
  delete: deleteNote,
  getOne: getOneNote,
  getAll: getAllNotes,
  update: updateNote,
};
export default noteController;

import mongoose from "mongoose";
const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    references: "user",
    required: true,
  },
});
export const note = mongoose.model("note", noteSchema);
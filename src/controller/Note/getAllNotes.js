import { note } from "../../model/notes.model.js";

const getAllNotes = async (request, response) => {
  try {
    const notes = await note
      .find({ createdBy: request.user._id })
      .select("-createdBy -__v");
    response.status(201).json({ notes });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error });
  }
};
export { getAllNotes };

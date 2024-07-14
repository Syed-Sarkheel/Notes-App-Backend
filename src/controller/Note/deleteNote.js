import { note } from "../../model/notes.model.js";

const deleteNote = async (request, response) => {
  try {
    const { id } = request.params;
    if (!id) {
      return response.status(400).json({ message: "Required fields missing" });
    }
    const obj = await note.findOne({
      $and: [{ _id: id }, { createdBy: request.user._id }],
    });

    if (!obj) {
      response
        .status(404)
        .json({ message: "Note with provided id does not exist" });
    }
    await note.findByIdAndDelete(id);
    response.status(200).json({ message: "Note deleted sucessfully" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error });
  }
};
export { deleteNote };

import { note } from "../../model/notes.model.js";

const updateNote = async (request, response) => {
  try {
    const { id } = request.params;
    const { title, content } = request.body;
    if (!id) {
      return response.status(400).json({ message: "Required fields missing" });
    }
    const obj = await note.findById(id);
    // console.log(String(obj.createdBy));
    if (String(obj.createdBy) !== request.user._id) {
      response
        .status(403)
        .json({ message: "You dont have access to update this note" });
    }
    // console.log(typeof request.user._id);
    if (!obj) {
      response
        .status(404)
        .json({ message: "Note with provided id does not exist" });
    }
    const updated = await note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    response
      .status(200)
      .json({ message: "Note updated sucessfully", note: updated });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error });
  }
};
export { updateNote };

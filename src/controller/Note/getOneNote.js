import { note } from "../../model/notes.model.js";

const getOneNote = async (request, response) => {
  try {
    const { id } = request.params;
    if (!id) {
      response.status(400).json({ message: "Invalid ID" });
    }
    const obj = await note
      .findOne({
        $and: [{ _id: id }, { createdBy: request.user._id }],
      })
      .select("-createdBy -__v");
    response.status(201).json({ note: obj });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error });
  }
};
export { getOneNote };

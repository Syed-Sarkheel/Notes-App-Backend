import moment from "moment/moment.js";
import { note } from "../../model/notes.model.js";

const createNote = async (request, response) => {
  try {
    const { title, content } = request.body;

    // console.log(request.user);
    if (!title || !content) {
      response.status(400).json({ message: "missing title or content" });
    }
    const createdAt = moment().format("LL");
    await note.create({
      title,
      content,
      createdBy: request.user._id,
      createdAt,
    });
    response.status(201).json({ title, content, createdAt });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error });
  }
};
export { createNote };

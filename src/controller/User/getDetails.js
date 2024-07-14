import { User } from "../../model/user.model.js";

const getDetails = async (request, response) => {
  try {
    const { id } = request.params;
    if (!id) {
      response
        .status(400)
        .json({ message: "Invalid ID : No user exists with this ID" });
    }
    const obj = await User.findById(id);
    if (!obj) {
      response.status(404).json({ message: "No user with provided ID exists" });
    }
    const { name, email } = obj;
    response.status(200).json({ user: { name, email } });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error });
  }
};
export { getDetails };

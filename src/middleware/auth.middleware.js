import jwt from "jsonwebtoken";

const checkAuth = (req, res, next) => {
  try {
    const bearerAuth = req.headers.authorization;
    if (!bearerAuth) {
      res.status(400).json({ message: "Missing header - authorization" });
    }
    const token = bearerAuth.split(" ")[1];
    // console.log(bearerAuth.split(" "));
    if (!token) {
      res.status(400).json({ message: "No token Entered" });
    }
    const userData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (!userData) {
      res.status(401).json({ message: "Invalid Token" });
    }
    req.user = userData;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export { checkAuth };

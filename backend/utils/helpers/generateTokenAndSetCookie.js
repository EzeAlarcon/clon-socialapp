import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    httpOnly: true, // más seguro
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 días
    sameSite: "strict", // CSRF
  });

  return token;
};

export default generateTokenAndSetCookie;

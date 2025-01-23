import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.NEXTAUTH_SECRET; // Use a secure environment variable in production

export const signToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
};
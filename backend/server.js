import express from "express";
import dotenv from "dotenv";
import conectionDB from "./db/conectionDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();
conectionDB();
const app = express();

const PORT = process.env.PORT || 5000;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// middleware
app.use(express.json({ limit: "50mb" })); // Para dividir datos JSON en el cuerpo de la solicitud
app.use(express.urlencoded({ extended: true })); // Para analizar los datos del formulario en el cuerpo de la solicitud
app.use(cookieParser());

// Rutas
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(PORT, () => console.log(`port: http://localhost:${PORT}`));

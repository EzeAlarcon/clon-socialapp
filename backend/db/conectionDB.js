import mongoose from "mongoose";

const conectionDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // Para evitar advertencias en la consola
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default conectionDB;

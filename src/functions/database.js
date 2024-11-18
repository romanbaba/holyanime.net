import mongoose from "mongoose";

export async function dbInitialize() {
  if (mongoose.connections[0].readyState) return true;

  try {
    await mongoose.connect(process.env.NEXT_DATABASE_URI);
    console.log("db bağlandı");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
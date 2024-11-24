import { model, models, Schema } from "mongoose";

const schema = new Schema({
  name: String,
  image: String,
  email: String,
  notifications: { type: [{ name: String, description: String, image: { type: String, required: false, default: null }, date: Date }], required: false, default: [] }
}, { timestamps: true });
export const User = models.user || model("user", schema);
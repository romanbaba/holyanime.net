import { model, models, Schema } from "mongoose";

const schema = new Schema({ message: String }, { timestamps: true });
export const Test = models.test || model("test", schema);
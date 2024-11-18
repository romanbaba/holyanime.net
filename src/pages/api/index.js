import { dbInitialize } from "@/functions/database.js";
import { Test } from "@/models/Test.js";

/**
 * @typedef {{
 * message: string;
 * }} ResponseData
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse<ResponseData>} res 
 */
export default async function handler(req, res) {
  await dbInitialize();
  const test = await Test.findOne({ message: "romanbaba" });

  if (!test) {
    res.status(200).send({ message: "Hello from Next.js!" });  
  }

  await (new Test({ message: "romanbaba" })).save();
  res.status(200).send({ message: "Hello from MongoDB!" });
}
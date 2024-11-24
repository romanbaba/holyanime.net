import { dbInitialize } from "@/functions/database.js";
import { User } from "@/models/user.js";

/**
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */
export default async function hanlder(req, res) {
  await dbInitialize();
  const users = await User.find();

  if ((req.method && req.method === "POST")) {
    const { ...data } = req.body;
    
    const findUser = users.find((val) => val.email === data.email);
    if (findUser) {
      res.send({ success: true, users: { data, users } });
      return;
    }

    const userData = new User({ ...data });
    await userData.save();

    res.send({ success: true, users: { userData, users } });
  }

  if ((req.method && req.method === "GET")) {
    res.send({ success: true, users });
  }
}
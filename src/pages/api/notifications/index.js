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
    if (("email" in req.query && req.query.email)) {
      const { ...data } = req.body;
      const email = req.query.email;
      const user = users.find((val) => val.email === email);
  
      await user.updateOne({ notifications: [data, ...user.notifications] });
      res.status(200).send({ success: true, data: { ...user } });
      return;
    }
   
  }

  if ((req.method && req.method === "GET")) {
    res.send({ success: true, users });
  }
}
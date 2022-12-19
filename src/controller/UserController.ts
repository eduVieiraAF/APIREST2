import { Request, Response } from "express";
import User from "../database/schemas/user";

class UserController {
  async findUser(req: Request, res: Response) {
    try {
        const users = await User.find()

        return res.json(users)

    } catch (error) {
        return res.status(500).json({server: "Could not connect"})
    }
  }

  async addUser(req: Request, res: Response) {
    const { name, email, password } = req.body;

    try {
      const userExists = await User.findOne({ email });

      if (userExists) {
        return res
          .status(400)
          .json({
            error: "Mmmm",
            message: "We found a user with the same email",
          });
      }

      const user = await User.create({ name, email, password });

      return res.json(user);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Registration failed", message: error });
    }
  }
}

export default new UserController();

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import { SECRET_KEY } from "../../../components/tokens/verifyTokens";
import prisma from "../../../lib/prisma";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  try {
    if (req.method !== "POST") {
      res.status(400).json({ message: "Request must be a POST request" });
      return;
    }

    const { username, password } = req.body;

    if (!(username && password)) {
      res.status(400).json({
        message:
          "Both Username and Password are required, as well as Application/JSON header",
      });
      return;
    }

    const existingUser = await prisma.user.findUnique({
      where: { username: username },
    });

    if (!existingUser) {
      res
        .status(400)
        .json({ message: `No user found with username "${username}"` });
      return;
    }

    if (await compare(password, existingUser.password)) {
      const token = sign(
        { id: existingUser.id, username: username },
        SECRET_KEY,
        {
          expiresIn: "2h",
        }
      );

      res.status(200).json({ username: username, token: token });
      return;
    } else {
      res.status(400).json({ message: "Incorrect password" });
      return;
    }
  } catch (err) {
    console.log(err);
    res.status(500).json("");
  }
}

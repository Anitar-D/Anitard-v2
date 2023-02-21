import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import express from "express";
import prisma from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from 'next'
import { SECRET_KEY } from "../../../components/tokens/verifyTokens";
import NextCors from 'nextjs-cors';

export default async function handler(
      req:NextApiRequest
    , res:NextApiResponse
    ) {
  try {
    if (req.method !== "POST") {
      res.status(405).json({ message: "Must be a POST request!" });
      return;
    }
    const { username,password,firstname,email } = req.body;

    if (!(username&&password&&firstname&&username)) {
      res.status(405).json({
        message:
          "Fill the required fields please",
      });
    }

    const existingUser = await prisma.user.findUnique({
      where: { username: username },
    });

    if (existingUser) {
      res.status(405).json({ message: "Username taken, try another" });
      return;
    }

    const hashedPassword = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username: username,
        firstname: firstname,
        email:email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ username: user.username,email: user.email,password:password,firstname:user.firstname });
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json("not ok");
  }
}
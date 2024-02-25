import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectToDataBase } from "@/mongoose";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    await connectToDataBase();
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({
        success: false,
        error: "email or password not found",
      });
    }

    const newUser = await User.create({ email, password });

    const token = jwt.sign({ newUser }, "secret", { expiresIn: "1h" });

    cookies().set("token", token);
    return NextResponse.json({
      success: true,
      message: "token cookiega saqlandi",
      token,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}

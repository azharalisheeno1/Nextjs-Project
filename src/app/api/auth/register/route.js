
import { DBConeectFuntion } from "@/app/MongDB/Mongodb";

import UserMode from "@/app/MongDB/model/UserMode";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await DBConeectFuntion();

  const hashedPassword = await bcrypt.hash(password, 6);

  const UsersModel = new UserMode({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await UsersModel.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
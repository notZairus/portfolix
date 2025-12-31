"use server";

import { auth } from "@/lib/auth";
import connectDb from "@/lib/db";
import { IUser } from "@/lib/global";
import User from "@/models/user";

export const getAuthenticatedUser = async () => {
  await connectDb();
  const data = await auth();

  const user = await User.findOne({ email: data?.user?.email });

  if (!user) throw new Error("no user found!");

  return {
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    middleName: user.middleName,
  } as IUser;
};

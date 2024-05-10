import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET(request: Request) {
  await prisma.todo.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      email: "test1@google.com",
      password: bcrypt.hashSync("123456"),
      roles: ["admin", "client", "super-user"],
      todos: {
        create: [
          { description: "Stone of soul", complete: true },
          { description: "Stone of power" },
          { description: "Stone of time" },
          { description: "Stone of space" },
          { description: "Stone of reality" },
        ],
      },
    },
  });

  return NextResponse.json({ message: "Seed Executed" });
}

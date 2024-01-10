import { UserModel } from "@/utils/schemaModels";
import connectDB from "@/utils/database";
import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    UserModel.create(body);

    return NextResponse.json({
      message: "登録成功",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "登録失敗",
      status: 500,
    });
  }
}

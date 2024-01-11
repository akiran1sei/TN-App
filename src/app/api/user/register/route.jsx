const { NextResponse } = require("next/server");
import connectDB from "@/utils/database";
import { UserModel } from "@/utils/schemaModels";
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    UserModel.create(body);
    return NextResponse.json({ message: "ユーザー登録成功", status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "ユーザー登録失敗/route.jsx",
      status: 500,
    });
  }
}

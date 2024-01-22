const { NextResponse } = require("next/server");
import connectDB from "@/app/utils/database";
import { UserModel } from "@/app/utils/schemaModels";
export async function POST(request) {
  const body = await request.json();
  try {
    await connectDB();
    // console.log(body);
    UserModel.create(body);
    return NextResponse.json({ message: "ユーザー登録成功", status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "ユーザー登録失敗/route.jsx",
      status: 500,
    });
  }
}

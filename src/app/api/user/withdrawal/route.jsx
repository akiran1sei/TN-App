const { NextResponse } = require("next/server");
import connectDB from "@/app/utils/database";
import { UserModel } from "@/app/utils/schemaModels";
export async function POST(request) {
  const body = await request.json();

  try {
    await connectDB();
    await UserModel.deleteOne({ _id: body.id });
    return NextResponse.json({
      message: "ユーザー削除成功",

      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "ユーザー削除失敗/route.jsx",
      status: 500,
    });
  }
}

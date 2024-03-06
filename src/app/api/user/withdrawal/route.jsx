const { NextResponse } = require("next/server");
import connectDB from "@/app/utils/database";
import { BeansModel, UserModel } from "@/app/utils/schemaModels";
export async function POST(request) {
  const body = await request.json();
  console.log("body:", body.email, body.id);
  try {
    await connectDB();
    const DeleteUser = await UserModel.findOne({ _id: body.id });
    await UserModel.deleteOne({ _id: DeleteUser.id });
    await BeansModel.deleteMany({ email: DeleteUser.email });
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

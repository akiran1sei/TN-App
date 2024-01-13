const { NextResponse } = require("next/server");
import connectDB from "@/utils/database";
import { UserModel } from "@/utils/schemaModels";
// import { SignJWT } from "jose";
export async function POST(request) {
  const body = await request.json();
  try {
    await connectDB();

    const UserData = await UserModel.findOne({ email: body.email });

    if (UserData) {
      //ユーザーデータが存在する場合
      if (body.password === UserData.password) {
        //パスワードが正しい場合
        const secretKey = new TextEncoder().encode("TastingNote");
        const payload = {
          email: body.email,
        };

        const token = await new SignJWT(payload.email)
          .setProtectedHeader({ alg: "HS 256" })
          .setExpirationTime(" 1 d")
          .sign(secretKey);

        return NextResponse.json({
          message: "ログイン成功",
          token: token,
          status: 200,
        });
      } else {
        //パスワードが正しくない場合
        return NextResponse.json({
          message: "ログイン失敗：パスワードが間違っています",
          status: 200,
        });
      }
    } else {
      //ユーザーデータが存在しない場合
      return NextResponse.json({
        message: "ログイン失敗：ユーザー登録してください",
        status: 200,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "ログイン失敗/route.jsx",
      status: 500,
    });
  }
}

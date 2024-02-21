const { NextResponse } = require("next/server");
import { cookies } from "next/headers";
import connectDB from "@/app/utils/database";
import { UserModel } from "@/app/utils/schemaModels";
import { SignJWT } from "jose";
export async function POST(request) {
  await connectDB();
  const body = await request.json();
  // console.log(body);
  try {
    const UserData = await UserModel.findOne({ email: body.email });
    // console.log(UserData);
    if (UserData) {
      //ユーザーデータが存在する場合
      if (body.password === UserData.password) {
        //パスワードが正しい場合
        const secretKey = new TextEncoder().encode("TastingNote");
        const payload = {
          email: body.email,
        };

        const token = await new SignJWT(payload)
          .setProtectedHeader({ alg: "HS256" })
          .setExpirationTime(" 4h")
          .sign(secretKey);

        async function create(data) {
          cookies().set("name", "lee");
          // or
          cookies().set("name", "lee", { secure: true });
          // or
          cookies().set({
            name: "name",
            value: "lee",
            httpOnly: true,
            path: "/",
          });
        }
        const cookie = create();

        return NextResponse.json({
          message: "ログイン成功",
          token: token,
          cookies: cookie,
          status: 200,
        });
      } else {
        //パスワードが正しくない場合
        return NextResponse.json({
          message: "ログイン失敗：パスワードが間違っています",
          status: 500,
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

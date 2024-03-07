const { NextResponse } = require("next/server");
import { cookies } from "next/headers";
import connectDB from "@/app/utils/database";
import { UserModel } from "@/app/utils/schemaModels";
import { SignJWT } from "jose";

const Buffer = require("buffer/").Buffer; // note: the trailing slash is important!
export async function POST(request) {
  await connectDB();
  const body = await request.json();
  // console.log(body);
  try {
    const UserData = await UserModel.findOne({ email: body.email });
    const UserId = UserData._id;
    const UserName = UserData.username;
    const UserEmail = UserData.email;

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

        const keys = ["dataId", "dataName", "dataEmail"];
        cookies().delete(keys);
        function create() {
          const encodedUserId = Buffer.from(UserId).toString("base64");
          const encodedUserName = Buffer.from(UserName).toString("base64");
          const encodedUserEmail = Buffer.from(UserEmail).toString("base64");

          cookies().set({
            name: "dataId",
            value: encodedUserId,
            secure: true,
            httpOnly: true,
            path: "/",
          });
          cookies().set({
            name: "dataName",
            value: encodedUserName,
            secure: true,
            httpOnly: true,
            path: "/",
          });
          cookies().set({
            name: "dataEmail",
            value: encodedUserEmail,
            secure: true,
            httpOnly: true,
            path: "/",
          });
        }

        const NewCookie = create();

        return NextResponse.json({
          message: "ログイン成功",
          token: token,
          cookies: NewCookie,
          status: 200,
        });
      } else {
        //パスワードが正しくない場合
        return NextResponse.json({
          message: "ログイン失敗：パスワードが間違っています",
          status: 401,
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
    console.error(error);
    return NextResponse.json({
      message: "ログイン失敗",
      error: error.message,
      status: 500,
    });
  }
}

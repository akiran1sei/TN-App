//middleware.jsx

import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
export async function middleware(request) {
  const token = await request.headers.get("Authorization")?.split(" ")[1];
  if (!token) {
    return NextResponse.json({ message: "トークンがありません" });
  }
  try {
    const secretKey = new TextEncoder().encode("TastingNote");
    const decodedJwt = await jwtVerify(token, secretKey);

    return NextResponse.next();
  } catch (error) {
    return NextResponse.json({
      message: "トークンが正しくないので、ログインしてください。",
    });
  }
}

//適応範囲を絞る↓
export const config = {
  //適応したいファイルを書き込む↓
  matcher: [
    "/api/create",
    "/api/delete:path*",
    "/api/update:path*",

    //:path*は、該当フォルダーに含まれる全てのファイル&フォルダーに適応するときにつける
  ],
};

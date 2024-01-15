//middleware.jsx

import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
export async function middleware(request) {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im5ha2Ftb3JpLjEyMjRAZ21haWwuY29tIiwiZXhwIjoxNzA1Mzg2OTc3fQ.KNEyQ9Bw6u9e5lsZ9zw8F-qYQ4esphE8GlzT1yYLNVg";
  // const token = await request.headers.get("Authorization")?.split(" ")[1];
  if (!token) {
    return NextResponse.json({ message: "トークンがありません" });
  }
  try {
    const secretKey = new TextEncoder().encode("TastingNote");
    const decodedJwt = await jwtVerify(token, secretKey);
    // console.log("decodedJwt:", decodedJwt);
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
    "/api/readall",
    "/api/singleItem:path*",
    //:path*は、該当フォルダーに含まれる全てのファイル&フォルダーに適応するときにつける
  ],
};

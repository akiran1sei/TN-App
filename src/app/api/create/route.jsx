// import auth from "@/utils/auth.js";
import connectDB from "../../../utils/database";
import { BeansModel } from "../../../utils/schemaModels";
import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    await connectDB();
    // 作成された値が出力される

    const body = await request.json();

    BeansModel.create(body);
    // console.log(body);
    return NextResponse.json({
      message: "アイテム作成成功",
      status: 200,
    });
  } catch (err) {
    return NextResponse.json({
      message: "アイテム作成失敗/route.jsx",
      status: 500,
    });
  }
}

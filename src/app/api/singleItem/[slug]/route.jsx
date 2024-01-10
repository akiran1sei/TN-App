//  app/api/singleItem/[slug].jsx
import connectDB from "@/utils/database";
import { BeansModel } from "@/utils/schemaModels";
import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";
export async function GET(req, res) {
  // console.log(response.params.slug);

  try {
    await connectDB();

    const singleItem = await BeansModel.findById(res.params.slug);
    return NextResponse.json({
      message: "アイテム読み取り成功（シングル）",
      singleItem: singleItem,
      status: 200,
    });
  } catch (err) {
    return NextResponse.json({
      message: "アイテム読み取り失敗（シングル）",
      status: 500,
    });
  }
}

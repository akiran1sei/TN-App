//  app/api/mypage/[slug].jsx
import connectDB from "@/app/utils/database";
import { UserModel } from "@/app/utils/schemaModels";
import { BeansModel } from "@/app/utils/schemaModels";
import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";
export async function GET(req, res) {
  try {
    await connectDB();

    const singleUser = await UserModel.findById(res.params.slug);

    const UserBeans = await BeansModel.find({ email: singleUser.email })
      .sort({
        date: -1,
      })
      .lean()
      .exec();

    return NextResponse.json({
      message: "読み取り成功（マイページ）",
      singleUser: singleUser,
      UserBeans: UserBeans,
      status: 200,
    });
  } catch (err) {
    return NextResponse.json({
      message: "読み取り失敗（マイページ）",
      status: 500,
    });
  }
}

import connectDB from "../../utils/database";
import { BeansModel } from "../../utils/schemaModels";
import { NextResponse } from "next/server";
export async function GET(req) {
  try {
    await connectDB();
    // const allItems = await BeansModel.find({});
    const allItems = await BeansModel.find({})
      .lean()
      .exec(function (err, docs) {
        if (err) return console.error(err);
        console.log(docs);
      });
    console.log("allItems:", allItems);
    return NextResponse.json({
      message: "読み取り成功（オール）",
      allItems: allItems,
      status: 200,
    });
  } catch (err) {
    return NextResponse.json({
      message: "読み取り失敗（オール）",
      status: 500,
    });
  }
}

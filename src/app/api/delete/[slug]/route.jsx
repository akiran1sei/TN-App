// delete/route
import connectDB from "../../../utils/database";
import { BeansModel } from "../../../utils/schemaModels";
import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";
export async function DELETE(req, res) {
  try {
    await connectDB();
    const singleItem = await BeansModel.findById(res.params.slug);

    if (singleItem) {
      await BeansModel.deleteOne({ _id: res.params.slug });
      return NextResponse.json({
        message: "アイテム削除成功",
        status: 200,
      });
    } else {
      throw new Error();
    }
  } catch (err) {
    return NextResponse.json({
      message: "アイテム削除失敗",
      status: 500,
    });
  }
}

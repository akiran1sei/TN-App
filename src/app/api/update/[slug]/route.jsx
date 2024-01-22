import connectDB from "../../../utils/database";
import { BeansModel } from "../../../utils/schemaModels";

import { NextResponse } from "next/server";
export async function PUT(request, response) {
  const body = await request.json();
  try {
    await connectDB();

    await BeansModel.updateOne({ _id: response.params.slug }, body);
    return NextResponse.json({
      message: "アイテム編集成功",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "アイテム編集失敗",
      status: 500,
    });
  }
  // try {
  //   await connectDB();

  //   const reader = req.body.getReader();

  //   // チャンクを格納する配列
  //   const chunks = [];

  //   // 読み取りループ

  //   async function read() {
  //     const { done, value } = await reader.read();
  //     if (done) {
  //       // ストリームの終わり
  //       // チャンクをBlobに変換
  //       const blob = new Blob(chunks);
  //       // BlobからArrayBufferに変換
  //       const buffer = await blob.arrayBuffer();
  //       // ArrayBufferからオブジェクトにデコード
  //       const data = JSON.parse(new TextDecoder().decode(buffer));
  //       // オブジェクトを返す
  //       return data;
  //     }
  //     // チャンクを配列に追加
  //     chunks.push(value);
  //     // 次のチャンクを読み取る
  //     return read();
  //   }

  //   // 読み取り開始
  //   const data = await read(); // awaitキーワードを追加
  //   console.log(data);
  //   await BeansModel.updateOne(
  //     { _id: res.params.slug },
  //     data
  //     // { date: data.date } // アップデートしたい値をオブジェクトに変更
  //   );

  //   return NextResponse.json({
  //     message: "アイテム編集成功",
  //     status: 200,
  //   });
  // } catch (err) {
  //   return NextResponse.json({
  //     message: "アイテム編集失敗/route",
  //     status: 500,
  //   });
  // }
}

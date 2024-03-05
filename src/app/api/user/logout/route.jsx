const { NextResponse } = require("next/server");
import { cookies } from "next/headers";
export async function DELETE() {
  try {
    const keys = ["dataId", "dataName", "dataEmail"];

    for (const key of keys) {
      cookies().delete(key);
    }

    // ログアウト成功
    return NextResponse.json({
      message: "ログアウトしました",
      status: 200,
    });
  } catch (error) {
    // エラー処理
    return NextResponse.json({
      message: "ログアウトに失敗しました。",
      status: 500,
    });
  }
}

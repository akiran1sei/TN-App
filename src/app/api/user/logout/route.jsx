const { NextResponse } = require("next/server");
import { cookies } from "next/headers";
export async function DELETE() {
  try {
    function deleteCookie(data) {
      cookies().delete("dataId");
      cookies().delete("dataName");
      cookies().delete("dataEmail");
    }
    deleteCookie();

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

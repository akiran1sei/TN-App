import React from "react";
import { useRouter } from "next/navigation";

export function DeleteBtn(context) {
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const URL = `/api/delete/` + `${context.data}`;
      if (confirm("削除しますか？")) {
        const response = await fetch(URL, {
          cache: "no-store",

          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const jsonData = await response.json();
        alert(jsonData.message);
        await location.reload();
        return router.replace("/pages/selection");
      }
    } catch (err) {
      return alert("アイテム削除失敗/DeleteBtn");
    }
  }
  return (
    <>
      <button type="submit" onClick={handleSubmit}>
        削除する
      </button>
    </>
  );
}

import React from "react";
import { useRouter } from "next/navigation";

export function DeleteBtn(context) {
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const URL = `/api/delete/` + `${context.data}`;

      const response = await fetch(URL, {
        cache: "no-store",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const jsonData = await response.json();
      alert(jsonData.message);
      return router.replace("/pages/selection");
    } catch (err) {
      return alert("アイテム削除失敗/DeleteBtn");
    }
  }
  return (
    <>
      <button onClick={handleSubmit}>削除する</button>
    </>
  );
}

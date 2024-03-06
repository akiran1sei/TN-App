import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "@/app/styles/Home.module.css";
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
      <button type="submit" onClick={handleSubmit} className={styles.icon_btn}>
        <Image
          src="/images/delete_img.svg"
          alt="削除ボタン"
          width={48}
          height={48}
          priority
        />
        {/* 削除する */}
      </button>
    </>
  );
}

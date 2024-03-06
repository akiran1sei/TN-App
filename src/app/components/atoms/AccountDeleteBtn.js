"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/Home.module.css";

export function AccountDeleteBtn(data) {
  const router = useRouter();
  async function handleSubmit(e) {
    const dataId = data.data;
    e.preventDefault();

    try {
      if (confirm("削除しますか？")) {
        const response = await fetch(`/api/user/withdrawal`, {
          cache: "no-store",
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          cache: "no-store",
          body: JSON.stringify({ id: dataId }),
        });
        const jsonData = await response.json();
        alert(jsonData.message);

        return router.replace("/user/login");
      } else {
        return router.replace(`${AppUrl}/pages/mypage/${dataId}`);
      }
    } catch (err) {
      return alert("削除失敗/AccountDeleteBtn");
    }
  }
  return (
    <>
      <button
        type="submit"
        className={styles.accountDeleteBtn}
        onClick={handleSubmit}
      >
        アカウントを削除する
      </button>
    </>
  );
}

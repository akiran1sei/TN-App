"use client";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/Home.module.css";

export function LogoutButton() {
  const router = useRouter();
  async function handleLogout(e) {
    e.preventDefault();
    try {
      if (confirm("ログアウトしますか？")) {
        const response = await fetch(`/api/user/logout`, {
          cache: "no-store",
          method: "DELETE",
          cache: "no-store",
        });
        const jsonData = await response.json();
        alert(jsonData.message);
        // localStorage からトークンを削除
        await localStorage.removeItem("token");
        return router.push("/user/login");
      }
    } catch (error) {
      return { message: "ログアウトできませんでした。" };
    }
  }

  return (
    <form onSubmit={handleLogout}>
      <button className={styles.logout_btn} type="submit">
        Logout
      </button>
    </form>
  );
}

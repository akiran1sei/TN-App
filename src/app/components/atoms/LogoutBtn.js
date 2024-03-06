"use client";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/Home.module.css";
export function LogoutButton() {
  const router = useRouter();

  async function handleLogout(e) {
    e.preventDefault();
    //const AppUrl = `http://localhost:3000`;
    const AppUrl = `https://netlify--courageous-creponne-2fa598.netlify.app`;
    try {
      const URL = `${AppUrl}/api/user/logout`;
      if (confirm("ログアウトしますか？")) {
        const response = await fetch(URL, {
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
        ログアウト
      </button>
    </form>
  );
}

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/user/login`, {
        cache: "no-store",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const jsonData = await response.json();
      localStorage.setItem("token", jsonData.token);
      alert(jsonData.message);
      return router.replace("/pages/selection");
    } catch (err) {
      return alert("ログイン失敗");
    }
  };
  return (
    <div className={styles.sign_page}>
      <h1 className={styles.contents_title}>Login</h1>
      <div className={styles.sign_card}>
        <form onSubmit={handleSubmit} className={styles.sign_form}>
          <div className={styles.sign_inputBox}>
            <label htmlFor="email" className={styles.sign_label}>
              メールアドレス
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className={styles.sign_input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="メールアドレス"
              required
            />
          </div>
          <div className={styles.sign_inputBox}>
            <label htmlFor="password" className={styles.sign_label}>
              パスワード
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className={styles.sign_input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="パスワード"
              required
            />
          </div>
          {/* <div className={styles.sign_dividerRow}>
            <span className={styles.sign_dividerLine}></span>
            <span className={styles.sign_dividerText}>or</span>
            <span className={styles.sign_dividerLine}></span>
          </div>
          <div className={styles.sign_socialButtons}>
            <button type="button" className={styles.sign_socialBtn}>
              <Image
                src="/images/google.svg"
                alt="googleボタン"
                width={24}
                height={24}
                priority
              />
            </button>
            <button type="button" className={styles.sign_socialBtn}>
              <Image
                src="/images/facebook.svg"
                alt="facebookボタン"
                width={24}
                height={24}
                priority
              />
            </button>
            <button type="button" className={styles.sign_socialBtn}>
              <Image
                src="/images/github.svg"
                alt="githubボタン"
                width={24}
                height={24}
                priority
              />
            </button>
          </div> */}
          <button type="submit" className={styles.sign_submitBtn}>
            ログイン
          </button>
        </form>
        <div className={styles.sign_TextRow}>
          未登録のかたは、
          <span className={styles.sign_LinkText}>
            <Link href={"/user/register"} scroll={false} passHref>
              SignUpページ
            </Link>
          </span>
          へどうぞ！
        </div>
      </div>
    </div>
  );
}

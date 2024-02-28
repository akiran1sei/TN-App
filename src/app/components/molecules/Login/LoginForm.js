"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import signs from "../../../styles/Sign.module.css";
import Link from "next/link";
import Image from "next/image";
export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const AppUrl = `https://netlify--courageous-creponne-2fa598.netlify.app`;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${AppUrl}/api/user/login`, {
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
    <div className={signs.sign_page}>
      <h1 className={signs.sign_titleText}>Login</h1>
      <div className={signs.sign_card}>
        <form onSubmit={handleSubmit} className={signs.sign_form}>
          <div className={signs.sign_inputBox}>
            <label htmlFor="email" className={signs.sign_label}>
              メールアドレス
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className={signs.sign_input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="メールアドレス"
              required
            />
          </div>
          <div className={signs.sign_inputBox}>
            <label htmlFor="password" className={signs.sign_label}>
              パスワード
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className={signs.sign_input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="パスワード"
              required
            />
          </div>
          <div className={signs.sign_dividerRow}>
            <span className={signs.sign_dividerLine}></span>
            <span className={signs.sign_dividerText}>or</span>
            <span className={signs.sign_dividerLine}></span>
          </div>
          <div className={signs.sign_socialButtons}>
            <button type="button" className={signs.sign_socialBtn}>
              <Image
                src="/images/google.svg"
                alt="googleボタン"
                width={24}
                height={24}
                priority
              />
            </button>
            <button type="button" className={signs.sign_socialBtn}>
              <Image
                src="/images/facebook.svg"
                alt="facebookボタン"
                width={24}
                height={24}
                priority
              />
            </button>
            <button type="button" className={signs.sign_socialBtn}>
              <Image
                src="/images/github.svg"
                alt="githubボタン"
                width={24}
                height={24}
                priority
              />
            </button>
          </div>
          <button type="submit" className={signs.sign_submitBtn}>
            ログイン
          </button>
        </form>
        <div className={signs.sign_TextRow}>
          未登録のかたは、
          <span className={signs.sign_LinkText}>
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

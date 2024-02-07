"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import signs from "../../../styles/Sign.module.css";
import Link from "next/link";
import Image from "next/image";
export function RegisterForm(data) {
  const router = useRouter();
  //   const UserData = data.data.singleItem;
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/user/register`, {
        // cache: "no-store",
        // next: {
        //   revalidate: 30,
        // },
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      const jsonData = await response.json();
      alert(jsonData.message);
      return router.replace("/user/login");
    } catch (err) {
      return alert("登録失敗");
    }
  };
  return (
    <div className={signs.sign_page}>
      <h1 className={signs.sign_titleText}>Sign Up</h1>
      <div className={signs.sign_card}>
        <form onSubmit={handleSubmit} className={signs.sign_form}>
          <div className={signs.sign_inputBox}>
            <label htmlFor="username" className={signs.sign_label}>
              ユーザーネーム
            </label>
            <input
              id="username"
              type="text"
              name="username"
              className={signs.sign_input}
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="名前"
              required
            />
          </div>
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
            <button className={signs.sign_socialBtn}>
              <Image
                src="/images/google.svg"
                alt="googleボタン"
                width={24}
                height={24}
                priority
              />
            </button>
            <button className={signs.sign_socialBtn}>
              <Image
                src="/images/facebook.svg"
                alt="facebookボタン"
                width={24}
                height={24}
                priority
              />
            </button>
            <button className={signs.sign_socialBtn}>
              <Image
                src="/images/github.svg"
                alt="githubボタン"
                width={24}
                height={24}
                priority
              />
            </button>
          </div>
          <button className={signs.sign_submitBtn}>登録</button>
        </form>
        <div className={signs.sign_TextRow}>
          登録済みのかたは、
          <span className={signs.sign_LinkText}>
            <Link href={"/user/login"} scroll={false} passHref>
              Loginページ
            </Link>
          </span>
          へどうぞ！
        </div>
      </div>
    </div>
  );
}

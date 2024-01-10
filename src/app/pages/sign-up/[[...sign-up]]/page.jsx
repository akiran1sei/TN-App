"use client";
import Head from "next/head";

// import { useState } from "react";
// import Sign from "@/app/styles/Sign.module.css";
// import Link from "next/link";
// import Image from "next/image";
const NewUser = () => {
  // const [userName, setUserName] = useState("");
  // const [emailAddress, setEmailAddress] = useState("");
  // const [password, setPassword] = useState("");

  // const { isLoaded, signUp, setActive } = useSignUp();
  // if (!isLoaded) {
  //   // handle loading state
  //   return null;
  // }

  // async function submit(e) {
  //   e.preventDefault();
  //   // Check the sign up response to
  //   // decide what to do next.
  //   await signUp
  //     .create({
  //       userName,
  //       emailAddress,
  //       password,
  //     })
  //     .then((result) => {
  //       if (result.status === "complete") {
  //         console.log(result);
  //         setActive({ session: result.createdSessionId });
  //       } else {
  //         console.log(result);
  //       }
  //     })
  //     .catch((err) => console.error("error", err.errors[0].longMessage));
  // }
  return (
    <>
      <Head>
        <title>sign up</title>
        <meta
          name="description"
          content="コーヒーをテイスティングするときに使用するアプリです。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* <div className={Sign.signUp_page}>
        <div className={Sign.signUp_card}>
          <h1 className={Sign.signUp_titleText}>Create your account</h1>
          <div className={Sign.signUp_socialButtons}>
            <button type="submit" className={Sign.signUp_socialButton}>
              <Image
                src="/images/google.svg"
                alt="googleボタン"
                width={24}
                height={24}
                priority
              />
            </button>
            <button type="submit" className={Sign.signUp_socialButton}>
              <Image
                src="/images/github.svg"
                alt="githubボタン"
                width={24}
                height={24}
                priority
              />
            </button>
            <button type="submit" className={Sign.signUp_socialButton}>
              <Image
                src="/images/facebook.svg"
                alt="facebookボタン"
                width={24}
                height={24}
                priority
              />
            </button>
          </div>
          <div className={Sign.signUp_dividerRow}>
            <span className={Sign.signUp_dividerLine}></span>
            <span className={Sign.signUp_dividerText}>or</span>
            <span className={Sign.signUp_dividerLine}></span>
          </div>
          <form onSubmit={submit} className={Sign.signUp_form}>
            <div className={`${Sign.signUp_input_box} ${Sign.signUp_username}`}>
              <label htmlFor="username" className={Sign.signUp_label}>
                UserName
              </label>
              <input
                type="username"
                className={Sign.signUp_input}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className={`${Sign.signUp_input_box} ${Sign.signUp_email}`}>
              <label htmlFor="email" className={Sign.signUp_label}>
                Email
              </label>
              <input
                type="email"
                className={Sign.signUp_input}
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </div>
            <div className={`${Sign.signUp_input_box} ${Sign.signUp_password}`}>
              <label htmlFor="password" className={Sign.signUp_label}>
                Password
              </label>
              <input
                type="password"
                className={Sign.signUp_input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={Sign.signUp_submitBtn}>
              <button className={Sign.signUp_submitBtn}>Continue</button>
            </div>
          </form>
          <div className={Sign.signUp_Link}>
            <p className={Sign.signUp_TextRow}>
              Have an account?
              <Link
                href={"/pages/sign-in"}
                className={Sign.signUp_LinkText}
                passHref
              >
                Sign In
              </Link>
            </p>
          </div>
        
        </div>
      </div> */}
    </>
  );
};
export default NewUser;

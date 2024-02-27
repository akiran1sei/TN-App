"use client";
import header from "@/app/styles/Header.module.css";
import React, { useState } from "react";
import Link from "next/link";
import useAuth from "../../utils/useAuth";
// import { useRouter } from "next/navigation";
export function Header(res) {
  const [isActive, setIsActive] = useState(false);

  // const router = useRouter();
  const handleButtonClick = () => {
    setIsActive(!isActive);
  };
  const loginUserEmail = useAuth();
  if (loginUserEmail) {
    return (
      <header className={header.header}>
        <div className={header.header_title}>
          <h1 className={header.header_title_txt}>Tasting Note</h1>
        </div>

        <div className={header.header_button}>
          <button
            type="button"
            className={
              isActive
                ? `${header["button"]} ${header["active"]}`
                : header["button"]
            }
            onClick={handleButtonClick}
          >
            <span className={header.menu_bar}></span>
            <span className={header.menu_bar}></span>
            <span className={header.menu_bar}></span>
            <span className={header.visuallyHidden}>メニュー</span>
          </button>
        </div>

        <nav
          className={
            isActive ? `${header["menu"]} ${header["active"]}` : header["menu"]
          }
        >
          <ul className={header.menu_list}>
            <li className={header.menu_item}>
              <Link href={"/pages/selection"} scroll={false} passHref>
                Select
              </Link>
            </li>
            <li className={header.menu_item}>
              <Link href={"/pages/create"} scroll={false} passHref>
                New
              </Link>
            </li>
            <li className={header.menu_item}>
              <Link href={`/pages/mypage/${res.data}`} scroll={false} passHref>
                MyPage
              </Link>
            </li>
            {/* <li className={header.menu_item}>
            <button type="button" onClick={() => signOut(() => router.push("/"))}>
              Sign out
            </button>
          </li> */}
          </ul>
        </nav>

        {/* <nav
        className={
          isActive ? `${header["menu"]} ${header["active"]}` : header["menu"]
        }
      >
        <ul className={header.menu_list}>
          <li className={header.menu_item}>
            <Link href={"/pages/sign-in"} scroll={false} passHref>
              Sign In
            </Link>
          </li>
          <li className={header.menu_item}>
            <Link href={"/pages/sign-up"} scroll={false} passHref>
              Sign Up
            </Link>
          </li>
        </ul>
      </nav> */}
      </header>
    );
  } else {
    return (
      <header className={header.header}>
        <div className={header.header_title}>
          <h1 className={header.header_title_txt}>Tasting Note</h1>
        </div>

        <div className={header.header_button}>
          <button
            type="button"
            className={
              isActive
                ? `${header["button"]} ${header["active"]}`
                : header["button"]
            }
            onClick={handleButtonClick}
          >
            <span className={header.menu_bar}></span>
            <span className={header.menu_bar}></span>
            <span className={header.menu_bar}></span>
          </button>
        </div>

        <nav
          className={
            isActive ? `${header["menu"]} ${header["active"]}` : header["menu"]
          }
        >
          <ul className={header.menu_list}></ul>
        </nav>

        <nav
          className={
            isActive ? `${header["menu"]} ${header["active"]}` : header["menu"]
          }
        >
          <ul className={header.menu_list}>
            <li className={header.menu_item}>
              <Link href={"/user/login"} scroll={false} passHref>
                Login
              </Link>
            </li>
            <li className={header.menu_item}>
              <Link href={"/user/register"} scroll={false} passHref>
                SignUp
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

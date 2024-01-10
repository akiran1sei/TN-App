"use client";
import header from "../../app/styles/Header.module.css";
import React, { useState } from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";
export function Header() {
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();
  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={header.header}>
      <div className={header.header_title}>
        <h1 className={header.header_title_txt}>Tasting Note</h1>
      </div>

      <div className={header.header_button}>
        <button
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
        <ul className={header.menu_list}>
          <li className={header.menu_item}>
            <Link href={"/pages/selection"} passHref>
              Select
            </Link>
          </li>
          <li className={header.menu_item}>
            <Link href={"/pages/create"} passHref>
              New
            </Link>
          </li>
          {/* <li className={header.menu_item}>
            <button onClick={() => signOut(() => router.push("/"))}>
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
            <Link href={"/pages/sign-in"} passHref>
              Sign In
            </Link>
          </li>
          <li className={header.menu_item}>
            <Link href={"/pages/sign-up"} passHref>
              Sign Up
            </Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}

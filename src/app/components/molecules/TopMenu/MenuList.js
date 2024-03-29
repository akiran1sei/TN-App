"use client";

import styles from "@/app/styles/Home.module.css";
import Link from "next/link";

export function MenuList() {
  return (
    <nav className={styles.top_nav}>
      <h1 className={styles.header_title_txt}>
        <span>Tasting Note</span>
      </h1>
      <ul className={styles.top_nav_list}>
        <li className={styles.top_nav_item}>
          <button type="button" className={styles.top_btn}>
            <Link href={"/pages/selection"} scroll={false} passHref>
              Start
            </Link>
          </button>
        </li>

        <li className={styles.top_nav_item}>
          <button type="button" className={styles.top_btn}>
            <Link href={"/user/login"} scroll={false} passHref>
              Login
            </Link>
          </button>
        </li>

        <li className={styles.top_nav_item}>
          <button type="button" className={styles.top_btn}>
            <Link href={"/user/register"} scroll={false} passHref>
              SignUp
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}

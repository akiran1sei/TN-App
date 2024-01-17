"use client";

import styles from "@/app/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import useAuth from "@/utils/useAuth";
import { StartBtn } from "@/components/atoms/StartBtn";

export function TopMenu() {
  const loginUserEmail = useAuth();
  if (loginUserEmail) {
    return (
      <div className={styles.top}>
        <div className={styles.top_bg}>
          <div className={styles.top_bg_wrap}>
            <Image
              className={styles.top_img}
              src="/images/tasting-img1540w.jpg"
              alt="テイスティング中の画像"
              width={1540}
              height={1027}
              priority
            />
          </div>
        </div>
        <nav className={styles.top_nav}>
          <h1 className={styles.header_title_txt}>
            <span>Tasting Note</span>
          </h1>
          <ul className={styles.top_nav_list}>
            <li className={styles.top_nav_item}>
              <StartBtn />
            </li>
          </ul>
        </nav>
      </div>
    );
  } else {
    return (
      <div className={styles.top}>
        <div className={styles.top_bg}>
          <div className={styles.top_bg_wrap}>
            <Image
              className={styles.top_img}
              src="/images/tasting-img1540w.jpg"
              alt="テイスティング中の画像"
              width={1540}
              height={1027}
              priority
            />
          </div>
        </div>
        <nav className={styles.top_nav}>
          <h1 className={styles.header_title_txt}>
            <span>Tasting Note</span>
          </h1>
          <ul className={styles.top_nav_list}>
            <li className={styles.top_nav_item}>
              <button className={styles.top_btn}>
                <Link href={"/user/login"} passHref>
                  Login
                </Link>
              </button>
            </li>

            <li className={styles.top_nav_item}>
              <button className={styles.top_btn}>
                <Link href={"/user/register"} passHref>
                  SignUp
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

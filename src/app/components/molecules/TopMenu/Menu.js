"use client";

import styles from "@/app/styles/Home.module.css";
import Image from "next/image";

import { MenuList } from "./MenuList";

export function Menu() {
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
      <MenuList />
    </div>
  );
}

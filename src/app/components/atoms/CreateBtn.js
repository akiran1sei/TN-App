"use client";

import styles from "@/app/styles/Home.module.css";
import Image from "next/image";
export function CreateBtn() {
  return (
    <button type="submit" className={styles.icon_btn}>
      <Image
        src="/images/add_notes_img.svg"
        alt="作成ボタン"
        width={24}
        height={24}
        priority
      />
    </button>
  );
}

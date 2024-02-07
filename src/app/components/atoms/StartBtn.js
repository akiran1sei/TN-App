"use client";

import styles from "@/app/styles/Home.module.css";
import Link from "next/link";
export function StartBtn() {
  return (
    <button className={styles.top_btn}>
      <Link href={"/pages/selection"} scroll={false} passHref>
        START
      </Link>
    </button>
  );
}

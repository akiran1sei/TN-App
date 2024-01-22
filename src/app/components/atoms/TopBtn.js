"use client";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/Home.module.css";
// import Image from "next/image";
export function TopBtn() {
  const router = useRouter();

  return (
    <button
      className={styles.text_btn}
      onClick={() => router.replace("/")}
      type="button"
    >
      Top
    </button>
  );
}

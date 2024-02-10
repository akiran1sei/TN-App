"use client";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/Home.module.css";
import Image from "next/image";
export function BackBtn() {
  const router = useRouter();

  return (
    <button
      type="button"
      className={styles.icon_btn}
      onClick={() => router.replace("/")}
    >
      <Image
        src="/images/undo_img.svg"
        alt="トップページボタン"
        width={24}
        height={24}
        priority
      />
    </button>
  );
}

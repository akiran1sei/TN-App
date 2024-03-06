"use client";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/Home.module.css";
import Image from "next/image";
export function HomeBtn() {
  const router = useRouter();

  return (
    <button
      type="button"
      className={styles.icon_btn}
      onClick={() => router.replace("/pages/selection")}
    >
      <Image
        src="/images/home_img.svg"
        alt="Homeボタン"
        width={24}
        height={24}
        priority
      />
    </button>
  );
}

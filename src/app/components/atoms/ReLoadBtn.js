"use client";
import styles from "../../app/styles/Home.module.css";
import Image from "next/image";
export function ReLoadBtn() {
  const handleClick = () => {
    location.reload();
  };

  return (
    <button type="button" onClick={handleClick} className={styles.icon_btn}>
      <Image
        src="/images/refresh_img.svg"
        alt="リロードボタン"
        width={48}
        height={48}
        priority
      />
    </button>
  );
}

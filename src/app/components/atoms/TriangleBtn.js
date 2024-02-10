import { useState } from "react";
import styles from "@/app/styles/Home.module.css";
export function TriangleBtn() {
  const [isContents, setIsContents] = useState(false);
  const handleListButton = () => {
    setIsContents(!isContents);
  };
  return (
    <div
      className={
        isEditContents
          ? `${styles["triangle_btn"]} ${styles["active"]}`
          : styles["triangle_btn"]
      }
    >
      <div className={styles.btn_box} onClick={handleListButton}>
        <button type="button" className={styles.open_btn}></button>
        <button type="button" className={styles.close_btn}></button>
      </div>
    </div>
  );
}

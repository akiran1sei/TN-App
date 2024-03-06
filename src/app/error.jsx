"use client"; // Error components must be Client Components
import styles from "@/app/styles/Home.module.css";
import { useEffect } from "react";
import Link from "next/link";
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.error_page}>
      <h2 className={styles.error_title}>
        Something
        <br className={styles.error_break} /> went
        <br className={styles.error_break} /> wrong!
      </h2>
      <div className={styles.error_BtnBox}>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          className={styles.error_button}
        >
          Try again
        </button>
        <button type="button" className={styles.error_button}>
          <Link href={"/"} scroll={false} passHref>
            Top
          </Link>
        </button>
      </div>
    </div>
  );
}

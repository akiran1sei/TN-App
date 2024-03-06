import styles from "@/app/styles/Home.module.css";
export default function PagesLayout({ children }) {
  return (
    <>
      <header className={styles.sign_header}>
        <div className={styles.sign_header_title}>
          <h1 className={styles.sign_header_title_txt}>Tasting Note</h1>
        </div>
      </header>
      <main className={styles.sign_main}>
        <div className={styles.sign_main_contents}>{children}</div>
      </main>
    </>
  );
}

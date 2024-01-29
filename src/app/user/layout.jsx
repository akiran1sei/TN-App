import styles from "@/app//styles/Home.module.css";
export default function PagesLayout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_title}>
          <h1 className={styles.header_title_txt}>Tasting Note</h1>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.main_contents}>{children}</div>
      </main>
    </>
  );
}

import { Header } from "../components/organisms/Header";
import styles from "@/app//styles/Home.module.css";
export default function PagesLayout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.main_contents}>{children}</div>
      </main>
    </>
  );
}

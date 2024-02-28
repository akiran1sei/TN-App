import { Header } from "../components/organisms/Header";
import styles from "@/app//styles/Home.module.css";
import { cookies } from "next/headers";

export default function PagesLayout({ children }) {
  const GetCookies = cookies();
  const dataId = GetCookies.get(`dataId`);
  return (
    <>
      <Header data={dataId.value} />
      <main className={styles.main}>
        <div className={styles.main_contents}>{children}</div>
      </main>
    </>
  );
}

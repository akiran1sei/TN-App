import { Header } from "../components/organisms/Header";
import styles from "@/app//styles/Home.module.css";
import { cookies } from "next/headers";
const Buffer = require("buffer/").Buffer; // note: the trailing slash is important!
export default function PagesLayout({ children }) {
  const GetCookies = cookies();
  const dataId = GetCookies.get(`dataId`);
  function decode() {
    const decodedBuffer = Buffer.from(dataId.value, "base64");
    const decodedString = decodedBuffer.toString("utf-8");
    return decodedString;
  }
  // 例: dataId クッキーの値をデコードする
  const decodedUserId = decode(cookies().get("dataId"));
  console.log(decodedUserId);
  return (
    <>
      <Header data={decodedUserId} />
      <main className={styles.main}>
        <div className={styles.main_contents}>{children}</div>
      </main>
    </>
  );
}

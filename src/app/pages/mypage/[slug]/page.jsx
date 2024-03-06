import Head from "next/head";
// import Link from "next/link";
// import Image from "next/image";
import { revalidatePath } from "next/cache";
import styles from "@/app/styles/Home.module.css";
import { AccountDeleteBtn } from "@/app/components/atoms/AccountDeleteBtn";
// import { LogoutButton } from "@/app/components/atoms/LogoutBtn";
import dotenv from "dotenv";
const MyPage = async (data) => {
  const dataId = data.params.slug;
  dotenv.config();

  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/mypage/${dataId}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
  const UserData = await response.json();
  revalidatePath(`${process.env.NEXTAUTH_URL}/pages/mypage/${dataId}`);

  return (
    <>
      <Head>
        <title>Myページ</title>
        <meta
          name="description"
          content="コーヒーをテイスティングするときに使用するアプリです。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        {/* {UserData.UserBeans.map((beans) => (
          <div key={beans._id}>{beans._id}</div>
        ))} */}
        <div className={styles.mypage_page}>
          <h1 className={styles.contents_title}>MyPage</h1>
          <div className={styles.mypage_card}>
            <div className={styles.mypage_username}>
              <h2 className={styles.mypage_item_title}>user name</h2>
              <p> {UserData.singleUser.username}</p>
            </div>
            <div className={styles.mypage_email}>
              <h2 className={styles.mypage_item_title}>email</h2>
              <p> {UserData.singleUser.email}</p>
            </div>
            {/* <LogoutButton /> */}
            <div className={styles.mypage_account}>
              <form>
                <AccountDeleteBtn data={dataId} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyPage;

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { revalidatePath } from "next/cache";
import styles from "@/app/styles/Home.module.css";
import { AccountDeleteBtn } from "@/app/components/atoms/AccountDeleteBtn";
import { LogoutButton } from "@/app/components/atoms/Logout";
const MyPage = async (data) => {
  const dataId = data.params.slug;

  const AppUrl = `http://localhost:3000`;
  //const AppUrl = `https://netlify--courageous-creponne-2fa598.netlify.app`;
  const URL = `${AppUrl}/api/mypage/${dataId}`;

  const response = await fetch(URL, {
    method: "GET",
    cache: "no-store",
  });
  const UserData = await response.json();
  revalidatePath(`${AppUrl}/pages/mypage/${dataId}`);
  console.log(UserData.UserBeans);

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
            <LogoutButton />
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

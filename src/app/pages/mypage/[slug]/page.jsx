import Head from "next/head";

import Link from "next/link";
import Image from "next/image";
import { revalidatePath } from "next/cache";
import styles from "@/app/styles/Home.module.css";
const MyPage = async (data) => {
  const dataId = data.params.slug;
  const AppUrl = `http://localhost:3000`;
  //const AppUrl = `https://netlify--courageous-creponne-2fa598.netlify.app`;
  const URL = `${AppUrl}/api/mypage/${dataId}`;
  // console.log(URL);
  const response = await fetch(URL, {
    method: "GET",
    cache: "no-store",
  });
  const UserData = await response.json();
  revalidatePath(`${AppUrl}/page/mypage/${dataId}`);
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
        <p> {UserData.singleUser.username}</p>
        <p> {UserData.singleUser.email}</p>
        {/* {UserData.UserBeans.map((beans) => (
          <div key={beans._id}>{beans._id}</div>
        ))} */}
      </div>
    </>
  );
};
export default MyPage;

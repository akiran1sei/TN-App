import Head from "next/head";
import { Form } from "@/components/molecules/Selection/Form";
import dotenv from "dotenv";
const SelectionPage = async () => {
  dotenv.config();
  const NEXTAUTH_URL = process.env.NEXTAUTH_URL;

  const URL = `${NEXTAUTH_URL}` + `/api/readall`;
  console.log(URL);
  const response = await fetch(URL, {
    cache: "no-store",
  });
  const allItems = await response.json();
  //ClerkのバックエンドSDｋを使用しログイン中のEmailを取得する↓
  // const ResponseEmail = await fetch("http://localhost:3000/api/clerk", {
  //   cache: "no-cache",
  // });
  // const loginUser = await ResponseEmail.json();
  // console.log(loginUser.email);
  return (
    <>
      <Head>
        <title>セレクションページ</title>
        <meta
          name="description"
          content="コーヒーをテイスティングするときに使用するアプリです。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Form data={allItems} />
    </>
  );
};
export default SelectionPage;

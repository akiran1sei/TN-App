import Head from "next/head";
import { cookies } from "next/headers";
import { SelectionForm } from "@/app/components/molecules/Selection/SelectionForm-table";
import { revalidatePath } from "next/cache";
const { Buffer } = require("buffer");
import dotenv from "dotenv";
const SelectionPage = async () => {
  const GetCookies = cookies();
  const dataId = GetCookies.get(`dataId`);

  function decode() {
    const decodedBuffer = Buffer.from(dataId.value, "base64");
    const decodedString = decodedBuffer.toString("utf-8");
    return decodedString;
  }
  // 例: dataId クッキーの値をデコードする
  const decodedUserId = decode(cookies().get("dataId"));
  dotenv.config();
  const AppUrl = process.env.NEXTAUTH_URL;
  // const AppUrl = `http://localhost:3000`;
  //const AppUrl = `https://netlify--courageous-creponne-2fa598.netlify.app`;
  const URL = `${AppUrl}/api/mypage/${decodedUserId}`;
  const response = await fetch(URL, {
    method: "GET",
    cache: "no-store",
  });
  const allItems = await response.json();

  revalidatePath(`${AppUrl}/pages/selection`);
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

      <SelectionForm data={allItems} />
    </>
  );
};
export default SelectionPage;

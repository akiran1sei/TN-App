import Head from "next/head";
import dotenv from "dotenv";
import { UpdateForm } from "../../../components/molecules/Update/UpdateForm";

const UpdatePage = async (context) => {
  "use server";
  dotenv.config();
  const NEXTAUTH_URL = process.env.NEXTAUTH_URL;
  const URL = `${NEXTAUTH_URL}` + `/api/singleItem/` + `${context.params.slug}`;
  const response = await fetch(URL, { cache: "no-store" });
  const singleItem = await response.json();
  const singleData = singleItem.singleItem;

  return (
    <>
      <Head>
        <title>編集ページ</title>
        <meta
          name="description"
          content="コーヒーをテイスティングするときに使用するアプリです。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <UpdateForm data={singleData} />
    </>
  );
};
export default UpdatePage;

import Head from "next/head";
import { SelectionForm } from "../../components/molecules/Selection/SelectionForm";
import dotenv from "dotenv";
const SelectionPage = async () => {
  dotenv.config();
  const NEXTAUTH_URL = process.env.NEXTAUTH_URL;

  const URL = `${NEXTAUTH_URL}` + `/api/readall`;
  // console.log(URL);
  const response = await fetch(URL, {
    cache: "reload",
  });
  const allItems = await response.json();
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

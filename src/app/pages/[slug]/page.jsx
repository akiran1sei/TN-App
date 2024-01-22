//  app/[slug].jsx
import Head from "next/head";
import dotenv from "dotenv";
import { BrowsePage } from "@/app/components/pages/BrowsePage";

const CoffeeSingleItem = async (context) => {
  dotenv.config();
  const NEXTAUTH_URL = process.env.NEXTAUTH_URL;
  const URL = `${NEXTAUTH_URL}` + `/api/singleItem/` + `${context.params.slug}`;
  const response = await fetch(URL, { cache: "no-store" });
  const singleItem = await response.json();
  // console.log(singleItem.singleItem._id);

  return (
    <>
      <Head>
        <title>個別ページ</title>
        <meta
          name="description"
          content="コーヒーをテイスティングするときに使用するアプリです。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <BrowsePage data={singleItem} />
    </>
  );
};

export default CoffeeSingleItem;

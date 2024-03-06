//  app/[slug].jsx
import Head from "next/head";

import dotenv from "dotenv";
import BrowsePage from "../browse/[slug]/page";

const CoffeeSingleItem = async (context) => {
  dotenv.config();

  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/singleItem/` + `${context.params.slug}`,
    {
      cache: "no-store",
    }
  );
  const singleItem = await response.json();

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

//  app/[slug].jsx
import Head from "next/head";

import BrowsePage from "../browse/[slug]/page";

const CoffeeSingleItem = async (context) => {
  const AppUrl = `http://localhost:3000`;
  //const AppUrl = `https://netlify--courageous-creponne-2fa598.netlify.app`;
  const URL = `${AppUrl}/api/singleItem/` + `${context.params.slug}`;
  const response = await fetch(URL, { cache: "no-store" });
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

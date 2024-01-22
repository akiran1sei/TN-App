//  app/[slug].jsx
import Head from "next/head";
import React from "react";
import { DeleteForm } from "../../../components/molecules/Delete/DeleteForm";
import dotenv from "dotenv";
const DeletePage = async (context) => {
  dotenv.config();
  const NEXTAUTH_URL = process.env.NEXTAUTH_URL;
  const URL = `${NEXTAUTH_URL}` + `/api/singleItem/` + `${context.params.slug}`;
  const response = await fetch(URL, { cache: "no-store" });
  const singleItem = await response.json();
  return (
    <>
      <Head>
        <title>削除ページ</title>
        <meta
          name="description"
          content="コーヒーをテイスティングするときに使用するアプリです。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <DeleteForm data={singleItem} />
    </>
  );
};

export default DeletePage;

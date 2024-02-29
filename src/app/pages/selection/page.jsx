import Head from "next/head";
import { cookies } from "next/headers";
import { SelectionForm } from "@/app/components/molecules/Selection/SelectionForm-table";
import { revalidatePath } from "next/cache";

const SelectionPage = async () => {
  const GetCookies = cookies();
  const dataId = GetCookies.get(`dataId`);

  const AppUrl = `http://localhost:3000`;
  //const AppUrl = `https://netlify--courageous-creponne-2fa598.netlify.app`;
  const URL = `${AppUrl}/api/mypage/${dataId.value}`;
  const response = await fetch(URL, {
    method: "GET",
    cache: "no-store",
  });
  const allItems = await response.json();
  revalidatePath(`${AppUrl}/page/selection`);
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

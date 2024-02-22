import Head from "next/head";
import { cookies } from "next/headers";
import { SelectionForm } from "@/app/components/molecules/Selection/SelectionForm-table";
import { revalidatePath } from "next/cache";

const SelectionPage = async () => {
  function LoginId() {
    const cookieStore = cookies();
    const dataEmail = cookieStore.get("dataEmail");

    return dataEmail;
  }
  console.log(LoginId().value);
  // const AppUrl = `https://netlify--courageous-creponne-2fa598.netlify.app`;
  const AppUrl = `http://localhost:3000`;
  const URL = `${AppUrl}/api/readall`;
  // console.log(URL);
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

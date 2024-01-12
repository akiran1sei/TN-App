import Head from "next/head";
import { CreateForm } from "@/components/molecules/Create/CreateForm";

const CreatePage = () => {
  return (
    <>
      <Head>
        <title>新規作成ページ</title>
        <meta
          name="description"
          content="コーヒーをテイスティングするときに使用するアプリです。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <CreateForm />
    </>
  );
};
export default CreatePage;

import Head from "next/head";
import { Form } from "@/components/molecules/Create/Form";

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

      <Form />
    </>
  );
};
export default CreatePage;

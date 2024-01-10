import Head from "next/head";
import { TopMenu } from "@/components/molecules/Auth/TopMenu";

const Home = () => {
  return (
    <>
      <Head>
        <title>Tasting Note</title>
        <meta
          name="description"
          content="コーヒーをテイスティングするときに使用するアプリです。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TopMenu />
    </>
  );
};
export default Home;

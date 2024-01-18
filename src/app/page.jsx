import Head from "next/head";
import { Menu } from "@/components/molecules/TopMenu/Menu";

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
      <Menu />
    </>
  );
};
export default Home;

import { BrowseForm } from "@/app/components/molecules/Browse/BrowseForm";
import dotenv from "dotenv";
const BrowsePage = async (context) => {
  const ItemData = context.params.slug;

  dotenv.config();
  const AppUrl = process.env.NEXTAUTH_URL;
  // AppUrl = `http://localhost:3000`;
  //const AppUrl = `https://netlify--courageous-creponne-2fa598.netlify.app`;
  const URL = `${AppUrl}/api/singleItem/` + `${ItemData}`;
  const response = await fetch(URL, { cache: "no-store" });
  const singleItem = await response.json();
  return <BrowseForm data={singleItem} />;
};
export default BrowsePage;

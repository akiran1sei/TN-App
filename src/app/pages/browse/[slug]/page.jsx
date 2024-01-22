import dotenv from "dotenv";
import { BrowseForm } from "@/app/components/molecules/Browse/BrowseForm";
const BrowsePage = async (context) => {
  dotenv.config();

  const ItemData = context.params.slug;
  console.log(ItemData);

  const NEXTAUTH_URL = process.env.NEXTAUTH_URL;
  const URL = `${NEXTAUTH_URL}` + `/api/singleItem/` + `${ItemData}`;
  const response = await fetch(URL, { cache: "no-cache" });
  const singleItem = await response.json();
  return <BrowseForm data={singleItem} />;
};
export default BrowsePage;

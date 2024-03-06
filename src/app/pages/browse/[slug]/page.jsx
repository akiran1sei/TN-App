import { BrowseForm } from "@/app/components/molecules/Browse/BrowseForm";
import dotenv from "dotenv";
const BrowsePage = async (context) => {
  const ItemData = context.params.slug;
  dotenv.config();

  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/singleItem/` + `${ItemData}`,
    {
      cache: "no-store",
    }
  );
  const singleItem = await response.json();
  return <BrowseForm data={singleItem} />;
};
export default BrowsePage;

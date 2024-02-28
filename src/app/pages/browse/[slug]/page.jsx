import { BrowseForm } from "@/app/components/molecules/Browse/BrowseForm";
const BrowsePage = async (context) => {
  const ItemData = context.params.slug;
  console.log(ItemData);
  const AppUrl = `https://netlify--courageous-creponne-2fa598.netlify.app`;
  //const AppUrl = `http://localhost:3000`;
  const URL = `${AppUrl}/api/singleItem/` + `${ItemData}`;
  const response = await fetch(URL, { cache: "no-store" });
  const singleItem = await response.json();
  return <BrowseForm data={singleItem} />;
};
export default BrowsePage;

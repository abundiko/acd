import { fetchCategories } from "@/serverActions/fetchCategories";
import Main from "./Main";
export default async function Page() {
  const categories = await fetchCategories();

  return <Main categories={categories!} />;
}

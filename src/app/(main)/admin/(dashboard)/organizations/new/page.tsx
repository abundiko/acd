import { fetchCategories } from "@/serverActions/fetchCategories";
import NewOrgForm from "./Main";

export default async function Page() {
  const categories = await fetchCategories();

  if (!categories) return;

  return <NewOrgForm categories={categories} />;
}

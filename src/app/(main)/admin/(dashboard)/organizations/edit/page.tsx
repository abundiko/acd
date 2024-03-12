import { fetchOneOrganization } from "@/serverActions/fetchOneOrganizatios";
import Form from "./Form";
import { notFound } from "next/navigation";
import { fetchCategories } from "@/serverActions/fetchCategories";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function Page({
  searchParams
}: {
  searchParams: { id?: string };
}) {
  if (!searchParams.id) notFound();

  const categories = await fetchCategories();
  const res = await fetchOneOrganization(searchParams.id);

  if (res === 404) notFound();
  if (!res || !categories) return;
  return <Form {...res.stats} categories={categories.map(_ => _.title)} />;
}

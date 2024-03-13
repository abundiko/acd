import { fetchCategories } from "@/serverActions/fetchCategories";
import { fetchEvaluationDates } from "@/serverActions/fetchEvaluationDates";
import { fetchOneOrganization } from "@/serverActions/fetchOneOrganizatios";
import { fetchOrganizations } from "@/serverActions/fetchOrganizations";
import { notFound } from "next/navigation";
import Dashboard from "./Dashboard";

export default async function Page({ params }: { params: { id: string } }) {
  const org = await fetchOneOrganization(params.id);

  if (org === 404) notFound();
  if (!org) throw new Error("Unable to connect, try again");

  const evaluationDates = await fetchEvaluationDates();
  const organizations = await fetchOrganizations();
  const categories = await fetchCategories();

  if (!evaluationDates || !organizations || !categories)
    throw new Error("Unable to connect, try again");

  const data = {
    evaluationDates,
    org: org.stats,
    categories,
    organizations
  };

  return (
    <section className="flex">
      <Dashboard {...data} />
    </section>
  );
}

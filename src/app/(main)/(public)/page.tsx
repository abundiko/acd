import { fetchTeam } from "@/serverActions/fetchTeam";
import "./assets/main.css";
import Main from "./Main";
import { fetchEvaluationDates } from "@/serverActions/fetchEvaluationDates";
import { fetchCategories } from "@/serverActions/fetchCategories";
import { fetchOrganizations } from "@/serverActions/fetchOrganizations";
import { fetchStories } from "@/serverActions/fetchStories";

export default async function Page() {
  const evaluationDates = await fetchEvaluationDates();
  const team = await fetchTeam();
  const stories = await fetchStories();
  const organizations = await fetchOrganizations();
  const categories = await fetchCategories();

  if (!evaluationDates || !team || !stories || !organizations || !categories)
    throw new Error("Go and Buy Data");

  return (
    <main>
      <Main
        evaluationDates={evaluationDates}
        stories={stories}
        categories={categories}
        organizations={organizations}
        team={team}
      />
    </main>
  );
}

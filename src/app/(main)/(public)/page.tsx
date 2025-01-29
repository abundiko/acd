import { fetchTeam } from "@/serverActions/fetchTeam";
import "./assets/main.css";
import Main from "./Main";
import { fetchEvaluationDates } from "@/serverActions/fetchEvaluationDates";
import { fetchCategories } from "@/serverActions/fetchCategories";
import { fetchOrganizations } from "@/serverActions/fetchOrganizations";
import { fetchTestimonials } from "@/serverActions/fetchTestimonials";
import { fetchLogos } from "@/serverActions/fetchLogos";
import { fetchPartners } from "@/serverActions/fetchPartners";

export default async function Page() {
  const evaluationDates = await fetchEvaluationDates();
  const organizations = await fetchOrganizations();
  const categories = await fetchCategories();
  const team = await fetchTeam();
  const testimonials = await fetchTestimonials();
  const logos = await fetchLogos();
  const partners = await fetchPartners();

  if (
    !evaluationDates ||
    !team ||
    !testimonials ||
    !organizations ||
    !categories ||
    !logos ||
    !partners
  )
    throw new Error("Unable to connect, try again");

  return (
    <main>
      <Main
        evaluationDates={evaluationDates}
        testimonials={testimonials}
        categories={categories}
        organizations={organizations}
        team={team}
        logos={logos}
        partners={partners}
      />
    </main>
  );
}

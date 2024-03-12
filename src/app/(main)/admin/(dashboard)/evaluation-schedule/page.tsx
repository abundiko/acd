import { fetchEvaluationDates } from "@/serverActions/fetchEvaluationDates";
import Main from "./Main";
export default async function Page() {
  const evaluationData = await fetchEvaluationDates();

  return <Main evaluation={evaluationData!} />;
}

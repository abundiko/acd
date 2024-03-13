import { fetchEvaluationDates } from "@/serverActions/fetchEvaluationDates";
import Main from "./Main";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Page() {
  const dates = await fetchEvaluationDates();
  if (!dates) throw new Error("Unable to connect, try again");

  return (
    <main>
      <Main dates={dates.map(_ => _.bookDate)} />
    </main>
  );
}

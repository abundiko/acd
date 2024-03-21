import { redirect } from "next/navigation";
import Dashboard from "./Dashboard";
import { fetchVisitCount } from "@/serverActions/fetchVisitCount";

export default async function Page() {
  const data = await fetchVisitCount();
  if (!data) throw new Error("Connection Error!");
  return (
    <section className="flex w-full">
      <Dashboard data={data} />
    </section>
  );
}

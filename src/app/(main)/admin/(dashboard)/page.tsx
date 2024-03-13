import { redirect } from "next/navigation";
import Dashboard from "./Dashboard";

export default function Page() {
  redirect("/admin/organizations");
  return (
    <section className="flex">
      {/* <Dashboard /> */}
    </section>
  );
}

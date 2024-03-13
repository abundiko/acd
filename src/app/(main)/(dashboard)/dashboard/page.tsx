import { fetchOrganizations } from "@/serverActions/fetchOrganizations";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Page() {
  const orgs = await fetchOrganizations();
  if (!orgs) throw new Error("Unable to connect, try again!");
  if (orgs.length == 0) redirect("/");
  redirect("/dashboard/" + orgs[0]._id);
}

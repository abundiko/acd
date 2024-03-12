import { fetchOrganizations } from "@/serverActions/fetchOrganizations";
import Main from "./Main";
export default async function Page() {
  const data = await fetchOrganizations();
  if (!data) return;
  return <Main organizations={data!} />;
}

import { fetchPartners } from "@/serverActions/fetchPartners";
import Main from "./Main";
export default async function Page() {
  const partners = await fetchPartners();
  if (!partners) throw new Error("Unable To Load Partners");
  return <Main partners={partners} />;
}

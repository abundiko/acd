import Main from "./Main";
import { fetchLogos } from "@/serverActions/fetchLogos";
export default async function Page() {
  const logos = await fetchLogos();
  if (!logos) throw new Error("Unable To Load Logos");
  return <Main logos={logos} />;
}

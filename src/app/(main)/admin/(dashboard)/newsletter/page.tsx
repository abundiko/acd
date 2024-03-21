import { fetchNewsLetters } from "@/serverActions/fetchNewsLetters";
import Main from "./Main";
export default async function Page() {
  const newsletters = await fetchNewsLetters();
  if (!newsletters) return;

  return <Main newsletters={newsletters!} />;
}

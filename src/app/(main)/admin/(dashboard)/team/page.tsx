import { fetchTeam } from "@/serverActions/fetchTeam";
import Main from "./Main";
export default async function Page() {
  const team = await fetchTeam();
  if (!team) return;
  return <Main team={team!} />;
}

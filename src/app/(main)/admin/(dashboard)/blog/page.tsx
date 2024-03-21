import { fetchStories } from "@/serverActions/fetchStories";
import Main from "./Main";
export default async function Page() {
  const stories = await fetchStories();
  if (!stories) return;
  return <Main stories={stories} />;
}

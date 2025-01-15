import { API } from "@/utils/constants";

export async function incrementVisits() {
  const a = await fetch(`${API}updatecount`);
  const b = await a.text();
  // console.log(b, "+ 1 visit");
}

"use server";

import { revalidatePath } from "next/cache";

export default async function revalidateRoutes(routes: string[]) {
  for (const route of routes) {
    revalidatePath(route);
  }
}

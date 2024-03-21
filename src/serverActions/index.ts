"use server";

import { revalidatePath } from "next/cache";

export default async function revalidateRoutes(routes: string[]) {
  for (const route of routes) {
    const routeType = (route.includes("[") && "page") || undefined;
    revalidatePath(route, routeType);
  }
}

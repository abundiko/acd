"use server";

import { API } from "@/utils/constants";
import { ApiActionResponse } from "@/utils/types/basicTypes";
import { ApiCountData } from "@/utils/types/companyTypes";

export async function fetchVisitCount(): Promise<
  ApiActionResponse<ApiCountData[]>
> {
  try {
    const req = await fetch(`${API}getcount`, {
      next: {
        revalidate: 0
      }
    });

    const res = (await req.json()) as { data: ApiCountData[] };
    if (res.data) return res.data;
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
}

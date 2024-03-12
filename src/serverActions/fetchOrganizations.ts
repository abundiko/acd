"use server";

import { API } from "@/utils/constants";
import { decompressApi } from "@/utils/functions/decompressApi";
import { ApiActionResponse, ApiCompressedData } from "@/utils/types/basicTypes";
import { ApiOrganizationData } from "@/utils/types/companyTypes";

export async function fetchOrganizations(): Promise<
  ApiActionResponse<ApiOrganizationData[]>
> {
  try {
    const req = await fetch(`${API}admin/getstats`, {
      next: {
        revalidate: 0
      }
    });

    const res = (await req.json()) as ApiCompressedData;
    const data = decompressApi<ApiOrganizationData[]>(res.data.data);
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

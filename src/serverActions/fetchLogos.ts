"use server";

import { API } from "@/utils/constants";
import { decompressApi } from "@/utils/functions/decompressApi";
import { ApiActionResponse, ApiCompressedData } from "@/utils/types/basicTypes";
import { ApiLogoData } from "@/utils/types/companyTypes";

export async function fetchLogos(): Promise<ApiActionResponse<ApiLogoData[]>> {
  try {
    const req = await fetch(`${API}admin/logo`, {
      next: {
        revalidate: 0
      }
    });

    const res = (await req.json()) as ApiCompressedData;
    const data = decompressApi<ApiLogoData[]>(res.data.data);
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

"use server";

import { API } from "@/utils/constants";
import { decompressApi } from "@/utils/functions/decompressApi";
import { ApiActionResponse, ApiCompressedData } from "@/utils/types/basicTypes";
import { ApiNewsletterData } from "@/utils/types/companyTypes";

export async function fetchNewsLetters(): Promise<
  ApiActionResponse<ApiNewsletterData[]>
> {
  try {
    const req = await fetch(`${API}admin/newsletters`, {
      next: {
        revalidate: 0
      }
    });

    const res = (await req.json()) as ApiCompressedData;
    const data = decompressApi<ApiNewsletterData[]>(res.data.data);
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

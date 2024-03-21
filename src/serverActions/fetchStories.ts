"use server";

import { API } from "@/utils/constants";
import { decompressApi } from "@/utils/functions/decompressApi";
import { ApiActionResponse, ApiCompressedData } from "@/utils/types/basicTypes";
import { ApiStoryData } from "@/utils/types/companyTypes";

export async function fetchStories(): Promise<
  ApiActionResponse<ApiStoryData[]>
> {
  try {
    const req = await fetch(`${API}admin/blog`, {
      next: {
        revalidate: 0
      }
    });

    const res = (await req.json()) as ApiCompressedData;
    const data = decompressApi<ApiStoryData[]>(res.data.data);
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

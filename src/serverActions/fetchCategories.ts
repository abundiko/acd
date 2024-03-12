"use server";

import { API } from "@/utils/constants";
import { decompressApi } from "@/utils/functions/decompressApi";
import { ApiActionResponse, ApiCompressedData } from "@/utils/types/basicTypes";
import { ApiCategoryData } from "@/utils/types/companyTypes";

export async function fetchCategories(): Promise<
  ApiActionResponse<ApiCategoryData[]>
> {
  try {
    const req = await fetch(`${API}admin/category`, {
      next: {
        revalidate: 0
      }
    });

    const res = (await req.json()) as ApiCompressedData;
    const data = decompressApi<ApiCategoryData[]>(res.data.data);
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

"use server";

import { API } from "@/utils/constants";
import { decompressApi } from "@/utils/functions/decompressApi";
import { ApiActionResponse, ApiCompressedData } from "@/utils/types/basicTypes";
import { ApiEvaluationData } from "@/utils/types/companyTypes";

export async function fetchEvaluationDates(): Promise<
  ApiActionResponse<ApiEvaluationData[]>
> {
  try {
    const req = await fetch(`${API}getevaldate`, {
      next: {
        revalidate: 0
      }
    });

    const res = (await req.json()) as ApiCompressedData;
    const data = decompressApi<ApiEvaluationData[]>(res.data.data);
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

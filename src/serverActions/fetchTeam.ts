"use server";

import { API } from "@/utils/constants";
import { decompressApi } from "@/utils/functions/decompressApi";
import { ApiActionResponse, ApiCompressedData } from "@/utils/types/basicTypes";
import { ApiTeamData } from "@/utils/types/companyTypes";

export async function fetchTeam(): Promise<ApiActionResponse<ApiTeamData[]>> {
  try {
    const req = await fetch(`${API}admin/team`, {
      next: {
        revalidate: 0
      }
    });

    const res = (await req.json()) as ApiCompressedData;
    const data = decompressApi<ApiTeamData[]>(res.data.data);
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

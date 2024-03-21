"use server";

import { API } from "@/utils/constants";
import {
  ApiActionResponseWith404,
  ApiDataResponse
} from "@/utils/types/basicTypes";
import { ApiTeamData } from "@/utils/types/companyTypes";

export async function fetchTeamMember(
  id: string
): Promise<ApiActionResponseWith404<ApiDataResponse<ApiTeamData>>> {
  try {
    const req = await fetch(`${API}admin/team/${id}`, {
      next: {
        revalidate: 0
      }
    });

    const res = (await req.json()) as ApiDataResponse<ApiTeamData>;
    if (res.data && res.data._id) return res;
    else return 404;
  } catch (err) {
    console.error(err);
    return null;
  }
}

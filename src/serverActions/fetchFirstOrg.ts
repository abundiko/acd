"use server";

import { API } from "@/utils/constants";
import { decompressApi } from "@/utils/functions/decompressApi";
import {
  ApiActionResponseWith404,
  ApiCompressedData,
  ApiDataResponse
} from "@/utils/types/basicTypes";
import {
  ApiDashboardOrganizationData,
  ApiOrganizationData
} from "@/utils/types/companyTypes";

export async function fetchFirstOrg(): Promise<
  ApiActionResponseWith404<ApiDashboardOrganizationData>
> {
  try {
    const req = await fetch(`${API}admin/getfirststats`, {
      next: {
        revalidate: 0
      }
    });

    const res = (await req.json()) as ApiCompressedData;
    // console.log(res);
    const data = decompressApi<ApiDashboardOrganizationData>(res.data.data);
    if (data.stats && data.stats._id) return data;
    else return 404;
  } catch (err) {
    // console.error(err);
    return null;
  }
}

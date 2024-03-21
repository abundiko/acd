"use server";

import { API } from "@/utils/constants";
import { decompressApi } from "@/utils/functions/decompressApi";
import { ApiActionResponse, ApiCompressedData } from "@/utils/types/basicTypes";
import { ApiTestimonialData } from "@/utils/types/companyTypes";

export async function fetchTestimonials(): Promise<
  ApiActionResponse<ApiTestimonialData[]>
> {
  try {
    const req = await fetch(`${API}admin/testimonial`, {
      next: {
        revalidate: 0,
      },
    });

    const res = (await req.json()) as ApiCompressedData;
    const data = decompressApi<ApiTestimonialData[]>(res.data.data);
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

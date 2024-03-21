"use server";

import { API } from "@/utils/constants";
import {
  ApiActionResponseWith404,
  ApiDataResponse,
} from "@/utils/types/basicTypes";
import { ApiTestimonialData } from "@/utils/types/companyTypes";

export async function fetchOneTestimonial(
  id: string
): Promise<ApiActionResponseWith404<ApiDataResponse<ApiTestimonialData>>> {
  try {
    const req = await fetch(`${API}admin/testimonial/${id}`, {
      next: {
        revalidate: 0,
      },
    });

    const res = (await req.json()) as ApiDataResponse<ApiTestimonialData>;
    if (res.data && res.data._id) return res;
    else return 404;
  } catch (err) {
    console.error(err);
    return null;
  }
}

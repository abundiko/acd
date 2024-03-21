"use client";

import AdminAuth from "@/components/AdminAuth";
import useFormSubmit from "@/hooks/useFormSubmit";
import revalidateRoutes from "@/serverActions";
import { API } from "@/utils/constants";
import { getCookie } from "@/utils/functions/cookies";
import { ApiFormMessage } from "@/utils/types/basicTypes";
import { ApiCategoryData } from "@/utils/types/companyTypes";

export default function Teamcard({ title, _id }: ApiCategoryData) {
const {
    formProps: { onSubmit},
    formState,
    setSuccessMessage
  } = useFormSubmit<ApiFormMessage>({
    url: `${API}admin/editcategory`,
    headers: {
      'x-access-token': getCookie("token") ?? "",
    },
    onComplete(data) {
      if (!data.message || !data) return;
      if (data.message === "category deleted") {
        revalidateRoutes([
          "/admin/organizations/new",
          "/admin/organizations/edit",
          "/admin",
          "/dashboard/[id]",
          "/",
        ]);
        setSuccessMessage("category deleted successfully");
      }
    }
  });
  if(!formState.successMessage)
  return (
    <div className="p-4 border rounded-md border-gray-50  bg-light shadow">
      <div className="flex justify-between items-center">
        <h1 className="font-[500]">
          {title}
        </h1>
        <form  onSubmit={onSubmit}>
          <AdminAuth />
          <input type="hidden" name="categoryid" value={_id} />
          <input type="hidden" name="action" value="delete" />
          <button disabled={formState.loading} className="btn-delete">
            {formState.loading ? '....' : 'Delete'}
          </button>
        </form>
      </div> 
    </div>
  );
}

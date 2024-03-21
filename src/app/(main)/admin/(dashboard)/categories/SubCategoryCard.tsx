import AdminAuth from "@/components/AdminAuth";
import useFormSubmit from "@/hooks/useFormSubmit";
import revalidateRoutes from "@/serverActions";
import { API } from "@/utils/constants";
import { getCookie } from "@/utils/functions/cookies";
import { ApiFormMessage } from "@/utils/types/basicTypes";
import { ApiSubCategory } from "@/utils/types/companyTypes";

export default function SubCategoryCard({
  _id,
  name,
  categoryid
}: ApiSubCategory) {
  const {
    formProps: { onSubmit},
    formState,
    setSuccessMessage
  } = useFormSubmit<ApiFormMessage>({
    url: `${API}admin/editsubcategory`,
    headers: {
      'x-access-token': getCookie("token") ?? "",
    },
    onComplete(data) {
      if (!data.message || !data) return;
      if (data.message === "subcategory deleted") {
        revalidateRoutes([
          "/admin/organizations/new",
          "/admin/organizations/edit",
          "/admin/categories",
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
    <div className="flex justify-between gap-2">
      <span className="opacity-70 text-sm">
        {name}
      </span>
      <form onSubmit={onSubmit} >
        <AdminAuth />
        <input type="hidden" name="subcategoryid" value={_id} />
          <input type="hidden" name="action" value="delete" />
          <button disabled={formState.loading} className="text-red-800 hover:text-red-600 hover:underline">
            {formState.loading ? '....' : 'Delete'}
          </button>
      </form>
    </div>
  );
}

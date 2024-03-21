"use client";

import AdminAuth from "@/components/AdminAuth";
import useFormSubmit from "@/hooks/useFormSubmit";
import revalidateRoutes from "@/serverActions";
import { API } from "@/utils/constants";
import { getCookie } from "@/utils/functions/cookies";
import { ApiFormMessage } from "@/utils/types/basicTypes";
import { ApiCategoryData } from "@/utils/types/companyTypes";
<<<<<<< HEAD

export default function Teamcard({ title, _id }: ApiCategoryData) {
=======
import { Popover, Theme } from "@radix-ui/themes";
import SubCategoryCard from "./SubCategoryCard";
import AddSubCategory from "./AddSubCategory";

export default function CategoryCard({ title, _id, subcategories }: ApiCategoryData) {
>>>>>>> next-js
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
<<<<<<< HEAD
=======
          "/admin/categories",
>>>>>>> next-js
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
<<<<<<< HEAD
      <div className="flex justify-between items-center">
        <h1 className="font-[500]">
          {title}
        </h1>
        <form  onSubmit={onSubmit}>
=======
      <div className="flex max-md:flex-col items-start gap-2 justify-between md:items-center">
        <div>
          <Theme>
    <Popover.Root>
  <Popover.Trigger>
          <h1 tabIndex={0} className="font-[500] cursor-pointer">
          {title}
        </h1>
  </Popover.Trigger>
    <Popover.Content style={{ width: 300, maxWidth: '95vw' }}>
    <div className="flex flex-col gap-1 bg-light p-2 rounded-md shadow-xl border">
      <h1 className="text-xs">{!subcategories.length && 'No'} Subcategories</h1>
      {
        subcategories?.map((item) => {
          return <SubCategoryCard key={item._id} {...item} />
        })
      }
    </div>
  </Popover.Content>
</Popover.Root>
  </Theme>
        </div>
        <div className="flex gap-2 w-fit">
          <AddSubCategory _id={_id} />
          <form  onSubmit={onSubmit}>
>>>>>>> next-js
          <AdminAuth />
          <input type="hidden" name="categoryid" value={_id} />
          <input type="hidden" name="action" value="delete" />
          <button disabled={formState.loading} className="btn-delete">
            {formState.loading ? '....' : 'Delete'}
          </button>
        </form>
<<<<<<< HEAD
=======
        </div>
>>>>>>> next-js
      </div> 
    </div>
  );
}
<<<<<<< HEAD
=======


>>>>>>> next-js

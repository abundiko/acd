import AdminAuth from "@/components/AdminAuth";
import AppInput from "@/components/ui/AppInput";
import FormButton from "@/components/ui/FormButton";
import useFormSubmit from "@/hooks/useFormSubmit";
import revalidateRoutes from "@/serverActions";
import { API } from "@/utils/constants";
import { getCookie } from "@/utils/functions/cookies";
import { ApiFormMessage } from "@/utils/types/basicTypes";
import { Theme, Popover } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function AddSubCategory({_id}:{_id:string}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const {
    formProps: { onSubmit},
    formState,
  } = useFormSubmit<ApiFormMessage>({
    url: `${API}admin/addsubcategory`,
    headers: {
      'x-access-token': getCookie("token") ?? "",
    },
    onComplete(data) {
      if (!data.message || !data) return;
      if (data.message === "subcategory uploaded") {
        setIsOpen(false);
        revalidateRoutes([
          "/admin/organizations/new",
          "/admin/organizations/edit",
          "/admin/categories",
          "/",
          "/dashboard/[id]",
        ]);
        router.refresh();
      }
    }});

  return <>
  <Theme>
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
  <Popover.Trigger>
    <button className="btn-secondary">
           + Subcategory
    </button>
  </Popover.Trigger>
  <Popover.Content style={{ width: 260 }}>
    <form onSubmit={onSubmit} className="flex flex-col items-stretch rounded-md w-full gap-2 bg-light shadow-[1px_1px_15px_#00000055] p-2">
      <AdminAuth />
      <input type="hidden" name="categoryid" value={_id} hidden />
      <AppInput placeholder="Subcategory Name" required name="name" />
      <FormButton loading={formState.loading} className="btn-primary px-3" >Submit</FormButton>
    </form>
  </Popover.Content>
</Popover.Root>
  </Theme>
  </>
}
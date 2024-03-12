import AdminAuth from "@/components/AdminAuth";
import useFormSubmit from "@/hooks/useFormSubmit";
import revalidateRoutes from "@/serverActions";
import { API } from "@/utils/constants";
import { getCookie } from "@/utils/functions/cookies";
import { ApiFormMessage } from "@/utils/types/basicTypes";
import { ApiStoryData } from "@/utils/types/companyTypes";
import Link from "next/link";

export default function Teamcard({ header, link, _id }: ApiStoryData) {
const {
    formProps: { onSubmit},
    formState,
    setSuccessMessage
  } = useFormSubmit<ApiFormMessage>({
    url: `${API}admin/editblog`,
    headers: {
      'x-access-token': getCookie("token") ?? "",
    },
    onComplete(data) {
      if (!data.message || !data) return;
      if (data.message === "blog deleted") {
        revalidateRoutes([
          '/admin/categories',
          '/dashoard/[id]',
          '/'
        ]);
        setSuccessMessage("blog deleted successfully");
      }
    }
  });
  if(!formState.successMessage)
  return (
    <div className="p-4 border rounded-md border-gray-50  bg-light shadow">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="font-semibold">
            {header}
          </h1>
          <Link href={link} target="_blank">
            {link}
          </Link>
        </div>
        <form  onSubmit={onSubmit}>
          <AdminAuth />
          <input type="hidden" name="blogid" value={_id} />
          <input type="hidden" name="action" value="delete" />
          <button disabled={formState.loading} className="btn-delete">
            {formState.loading ? '....' : 'Delete'}
          </button>
        </form>
      </div>
    </div>
  );
}

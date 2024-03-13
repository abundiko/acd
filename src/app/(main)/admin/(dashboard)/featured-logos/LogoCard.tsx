import useFetchApi from "@/hooks/useFetchApi";
import revalidateRoutes from "@/serverActions";
import { API } from "@/utils/constants";
import { ApiFormMessage } from "@/utils/types/basicTypes";
import { ApiLogoData } from "@/utils/types/companyTypes";

export default function LogoCard({ img, _id }: ApiLogoData) {
  const { fetchAgain, loading, setMainData, mainData } = useFetchApi<
    ApiFormMessage,
    boolean
  >(
    `${API}admin/deletelogo/${_id}`,
    data => {
      if (!data) return;
      if (data.message === "logo member deleted") {
        setMainData(true);
        revalidateRoutes(["/admin/featured-logos", "/"]);
      }
    },
    undefined,
    false
  );

  if (!mainData)
    return (
      <div className="p-4 border rounded-md border-gray-50  bg-light shadow">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <img
              src={img}
              alt="featured logo"
              className="h-12 object-contain"
            />
          </div>
          <button
            onClick={() => fetchAgain()}
            disabled={loading}
            className="btn-delete h-8 px-[3px_!important]"
          >
            {loading ? "....." : "Delete"}
          </button>
        </div>
      </div>
    );
}

import useFetchApi from "@/hooks/useFetchApi";
import revalidateRoutes from "@/serverActions";
import { API } from "@/utils/constants";
import { ApiFormMessage } from "@/utils/types/basicTypes";
import Link from "next/link";

export type OrgCardProps = {
  name: string;
  category: string;
  location: string;
  _id: string;
};

export default function Teamcard({
  name,
  category,
  location,
  _id
}: OrgCardProps) {
  const { fetchAgain, loading, setMainData, mainData } = useFetchApi<
    ApiFormMessage,
    boolean
  >(
    `${API}admin/deletestats/${_id}`,
    data => {
      // console.log(data);
      if (!data) return;
      if (data.message === "stats deleted") {
        setMainData(true);
        revalidateRoutes([
          "/admin/organizations",
          "/admin/organizations/edit",
          "/dashoard/[id]"
        ]);
      }
    },
    undefined,
    false
  );
  return (
    <div className="p-4 border rounded-md border-gray-50  bg-light shadow">
      <div className=" justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-1 lg:col-span-2">
          <Link
            href={`/dashboard/${_id}`}
            className="font-semibold text-blue-800"
          >
            {name}
          </Link>
          <p className="text-md opacity-80">
            {category}
          </p>
          <p className="text-md opacity-80">
            {location}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 lg:col-span-1">
          <Link
            href={`/admin/organizations/edit?id=${_id}`}
            className="bg-primary inline-flex justify-center items-center py-1 text-light rounded-md h-8"
          >
            edit
          </Link>
          <button
            onClick={() => fetchAgain()}
            disabled={loading}
            className="btn-delete px-[0px_!important] h-8"
          >
            {loading ? "....." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

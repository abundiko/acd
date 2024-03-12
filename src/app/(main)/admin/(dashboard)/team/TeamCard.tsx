import useFetchApi from "@/hooks/useFetchApi";
import revalidateRoutes from "@/serverActions";
import { API } from "@/utils/constants";
import { ApiFormMessage } from "@/utils/types/basicTypes";
import { ApiTeamData } from "@/utils/types/companyTypes";
import Link from "next/link";
import { Facebook, Instagram, TwitterSparrow } from "react-huge-icons/solid";

export default function Teamcard({
  img,
  name,
  role,
  instagram,
  facebook,
  twitter,
  _id
}: ApiTeamData) {
  const { fetchAgain, loading, setMainData, mainData } = useFetchApi<
    ApiFormMessage,
    boolean
  >(
    `${API}admin/deleteteam/${_id}`,
    data => {
      if (!data) return;
      if (data.message === "team member deleted") {
        setMainData(true);
        revalidateRoutes(["/admin/team", "/"]);
      }
    },
    undefined,
    false
  );

  function Socials() {
    return (
      <div className="flex text-lg">
        {instagram &&
          <Link
            href={instagram}
            className="hover:bg-slate-200 rounded-full p-3 text-dark-text"
          >
            <Instagram />
          </Link>}
        {twitter &&
          <Link
            href={twitter}
            className="hover:bg-slate-200 rounded-full p-3 text-dark-text"
          >
            <TwitterSparrow />
          </Link>}
        {facebook &&
          <Link
            href={facebook}
            className="hover:bg-slate-200 rounded-full p-3 text-dark-text"
          >
            <Facebook />
          </Link>}
      </div>
    );
  }

  if (!mainData)
    return (
      <div className="p-4 border rounded-md border-gray-50  bg-light shadow">
        <div className="flex sm:items-center justify-between max-sm:flex-col">
          <div className="flex gap-2 items-center">
            <img
              src={img}
              alt={name}
              className="rounded-full object-cover size-20"
            />
            <div className="flex flex-col ">
              <h1 className="text-xl font-bold">
                {name}
              </h1>
              <p className="text-sm opacity-70">
                {role}
              </p>
              <div className="md:hidden">
                <Socials />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full sm:w-40 justify-center">
            <div className="max-md:hidden">
              <Socials />
            </div>
            <div className="grid grid-cols-2 gap-2 h-fit">
              <Link
                href={`/admin/team/edit?id=${_id}`}
                className="btn btn-primary"
              >
                edit
              </Link>
              <button
                onClick={() => fetchAgain()}
                disabled={loading}
                className="btn-delete px-[0px_!important]"
              >
                {loading ? "....." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

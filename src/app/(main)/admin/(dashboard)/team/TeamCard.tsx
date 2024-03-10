import Link from "next/link";
import { Facebook, Instagram, TwitterSparrow } from "react-huge-icons/solid";

export type TeamcardProps = {
  img: string;
  name: string;
  role: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
};

export default function Teamcard({
  img,
  name,
  role,
  instagram,
  facebook,
  twitter,
}: TeamcardProps) {
  function Socials() {
    return (
      <div className="flex text-lg">
        {instagram && (
          <Link
            href={instagram}
            className="hover:bg-slate-200 rounded-full p-3 text-dark-text"
          >
            <Instagram />
          </Link>
        )}
        {twitter && (
          <Link
            href={twitter}
            className="hover:bg-slate-200 rounded-full p-3 text-dark-text"
          >
            <TwitterSparrow />
          </Link>
        )}
        {facebook && (
          <Link
            href={facebook}
            className="hover:bg-slate-200 rounded-full p-3 text-dark-text"
          >
            <Facebook />
          </Link>
        )}
      </div>
    );
  }

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
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="text-sm opacity-70">{role}</p>
            <div className="md:hidden">
              <Socials />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full sm:w-52">
          <div className="max-md:hidden">
            <Socials />
          </div>
          <div className="grid grid-cols-2 gap-2 ">
            <button className="bg-primary px-5 py-1 text-light rounded-md">
              edit
            </button>
            <button className="bg-red-100 px-5 text-red-600 rounded-md border border-red-800">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Facebook, Instagram, TwitterSparrow } from "react-huge-icons/solid";

export type BlogCardProps = {
  title: string;
  url: string;
  _id: string;
};

export default function Teamcard({ title, url, _id }: BlogCardProps) {
  return (
    <div className="p-4 border rounded-md border-gray-50">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="font-semibold">{title}</h1>
          <Link href={url}>{url}</Link>
        </div>
        <button className="bg-red-100 px-5 text-red-600 rounded-md border border-red-800 h-8">
          Delete
        </button>
      </div>
    </div>
  );
}

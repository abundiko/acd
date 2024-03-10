import Link from "next/link";
import { Facebook, Instagram, TwitterSparrow } from "react-huge-icons/solid";

export type NewsCardProps = {
  email: string;
  _id: string;
};

export default function Teamcard({ email, _id }: NewsCardProps) {
  return (
    <div className="p-4 border rounded-md border-gray-50  bg-light shadow">
      <div className="flex justify-between">
        <h1 className="font-semibold">{email}</h1>
        <button className="bg-red-100 px-5 text-red-600 rounded-md border border-red-800">
          Delete
        </button>
      </div>
    </div>
  );
}

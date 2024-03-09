import Link from "next/link";

export type OrgCardProps = {
  name: string;
  category: string;
  location: string;
};

export default function Teamcard({ name, category, location }: OrgCardProps) {
  return (
    <div className="p-4 border rounded-md border-gray-50">
      <div className=" justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-1 lg:col-span-2">
          <h1 className="font-semibold">{name}</h1>
          <p className="text-md opacity-80">{category}</p>
          <p className="text-md text-primary-dark">{location}</p>
        </div>
        <div className="grid grid-cols-2 gap-2  lg:col-span-1">
          <button className="bg-primary inline-flex justify-center items-center py-1 text-light rounded-md h-8">
            edit
          </button>
          <button className="bg-red-100 inline-flex justify-center items-center text-red-600 rounded-md border border-red-800 h-8">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

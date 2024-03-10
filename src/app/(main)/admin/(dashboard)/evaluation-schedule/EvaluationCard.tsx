import Link from "next/link";

export type EvaluationCardProps = {
  email: string;
  phone: string;
  address: string;
  date: string;
};

export default function Teamcard({
  email,
  phone,
  address,
  date,
}: EvaluationCardProps) {
  return (
    <div className="p-4 border rounded-md border-gray-50 bg-light shadow">
      <div className=" justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-1 lg:col-span-2">
          <Link
            href={`mailto:${email}`}
            className="font-semibold text-primary-dark"
          >
            {email}
          </Link>
          <p className="text-md opacity-80">{phone}</p>
          <p className="text-sm">{address}</p>
          <p className="text-sm text-primary-dark">{date}</p>
        </div>
        <button className="bg-red-100 inline-flex justify-center items-center text-red-600 rounded-md border border-red-800 h-8">
          Delete
        </button>
      </div>
    </div>
  );
}

import { formatDate } from "@/utils/functions/functions";
import { ApiEvaluationData } from "@/utils/types/companyTypes";
import Link from "next/link";
import { Location } from "react-huge-icons/solid";

export default function Teamcard({
  email,
  phone,
  address,
  bookDate: date,
  _id
}: ApiEvaluationData) {
  return (
    <div className="p-4 border rounded-md border-gray-50 bg-light shadow">
      <div className=" justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-1 lg:col-span-2">
          <Link
            href={`mailto:${email}`}
            className="font-semibold text-blue-900 hover:underline"
          >
            {email}
          </Link>
          <p className="text-md opacity-80">
            {phone}
          </p>
          <p className="text-sm flex">
            <Location />&nbsp;
            {address}
          </p>
          <p className="text-sm text-primary-dark">
            {formatDate(date)}
          </p>
        </div>
      </div>
    </div>
  );
}

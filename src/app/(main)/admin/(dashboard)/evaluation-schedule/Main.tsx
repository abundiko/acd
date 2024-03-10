import { Search } from "react-huge-icons/outline";
import OrgCard, { EvaluationCardProps } from "./EvaluationCard";

export default function Main() {
  return (
    <div className="">
      <div className="flex justify-between max-md:flex-col">
        <h1 className="text-2xl font-bold">Evaluation Schedule</h1>

        <div className="relative md:grid w-full max-w-[300px]">
          <input
            type="text"
            placeholder="Search ..."
            className="border border-gray-300 rounded-3xl p-2 w-full text-sm"
          />
          <Search className="absolute top-3 right-5" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full p-4">
        {dummy.map((dummy) => (
          <OrgCard key={dummy.email} {...dummy} />
        ))}
      </div>
    </div>
  );
}

const dummy: EvaluationCardProps[] = [
  {
    email: "example@gmail.com",
    phone: "09045278563",
    address: "Palau",
    date: "2021-09-15",
  },
  {
    email: "example@gmail.com",
    phone: "09045278563",
    address: "Palau",
    date: "2021-09-15",
  },
  {
    email: "example@gmail.com",
    phone: "09045278563",
    address: "Palau",
    date: "2021-09-15",
  },
  {
    email: "example@gmail.com",
    phone: "09045278563",
    address: "Palau",
    date: "2021-09-15",
  },
];

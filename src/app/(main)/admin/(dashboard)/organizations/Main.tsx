import { Search } from "react-huge-icons/outline";
import OrgCard, { OrgCardProps } from "./OrgCard";

export default function Main() {
  return (
    <div>
      <div className="flex justify-between max-md:flex-col">
        <h1 className="text-2xl font-bold">Organization Page</h1>

        <div className="relative md:grid w-full max-w-[300px]">
          <input
            type="text"
            placeholder="Search Team Members"
            className="border border-gray-300 rounded-3xl p-2 w-full text-sm"
          />
          <Search className="absolute top-3 right-5" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full p-4">
        {dummy.map((dummy) => (
          <OrgCard key={dummy.name} {...dummy} />
        ))}
      </div>
    </div>
  );
}

const dummy: OrgCardProps[] = [
  {
    name: "John Doe",
    category: "longer",
    location: "United States",
  },
  {
    name: "John Doe",
    category: "paragraph",
    location: "Denmark",
  },
  {
    name: "John Doe",
    category: "willing",
    location: "Uzbekistan",
  },
  {
    name: "John Doe",
    category: "hay",
    location: "Indonesia",
  },
];

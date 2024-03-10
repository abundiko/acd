import { Search } from "react-huge-icons/outline";
import Categorycard, { CategoryCardProps } from "./CategoryCard";

export default function Main() {
  return (
    <div>
      <div className="flex justify-between max-md:flex-col pb-4">
        <h1 className="text-2xl font-bold">Categories</h1>

        <div className="relative md:grid w-full max-w-[300px]">
          <input
            type="text"
            placeholder="Search Team Members"
            className="border border-gray-300 rounded-3xl p-2 w-full text-sm"
          />
          <Search className="absolute top-3 right-5" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
        {dummy.map((dummy) => (
          <Categorycard key={dummy.category} {...dummy} />
        ))}
      </div>
    </div>
  );
}

const dummy: CategoryCardProps[] = [
  {
    category: "hello",
    _id: "01114",
  },
  {
    category: "hello",
    _id: "01114",
  },
  {
    category: "hello",
    _id: "01114",
  },
  {
    category: "hello",
    _id: "01114",
  },
];

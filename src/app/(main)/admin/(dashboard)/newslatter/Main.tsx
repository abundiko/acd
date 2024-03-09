import { Search } from "react-huge-icons/outline";
import NewsCard, { NewsCardProps } from "./NewsCard";

export default function Main() {
  return (
    <div>
      <div className="flex justify-between max-md:flex-col">
        <h1 className="text-2xl font-bold">Newsletter</h1>

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
          <NewsCard key={dummy.email} {...dummy} />
        ))}
      </div>
    </div>
  );
}

const dummy: NewsCardProps[] = [
  {
    email: "fonepo@tenizoke.dm",
    _id: "01114",
  },
  {
    email: "ibuvu@pueme.ge",
    _id: "01114",
  },
  {
    email: "mu@sehsohor.io",
    _id: "01114",
  },
  {
    email: "fijansul@raroh.jp",
    _id: "01114",
  },
];

import { Search } from "react-huge-icons/outline";
import Blogcard, { BlogCardProps } from "./Blogcard";

export default function Main() {
  return (
    <div>
      <div className="flex justify-between max-md:flex-col">
        <h1 className="text-2xl font-bold">Stories</h1>

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
          <Blogcard key={dummy.title} {...dummy} />
        ))}
      </div>
    </div>
  );
}

const dummy: BlogCardProps[] = [
  {
    title: "hi",
    _id: "01114",
    url: "ww.facebook.com`",
  },
  {
    title: "hi",
    _id: "01114",
    url: "ww.facebook.com`",
  },
  {
    title: "hi",
    _id: "01114",
    url: "ww.facebook.com`",
  },
  {
    title: "hi",
    _id: "01114",
    url: "ww.facebook.com`",
  },
];

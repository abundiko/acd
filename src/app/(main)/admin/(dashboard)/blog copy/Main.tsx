"use client";

import Blogcard from "./Blogcard";
import { ApiStoryData } from "@/utils/types/companyTypes";
import SearchInput from "@/components/ui/SearchInput";
import { useState } from "react";

type Props = {
  stories: ApiStoryData[];
};

export default function Main({ stories }: Props) {
  const [filter, setFilter] = useState("");
  return (
    <div className="p-4">
      <div className="flex justify-between max-md:flex-col pb-4 gap-1">
        <h1 className="text-2xl font-bold">Stories</h1>

        <SearchInput onSearch={v => setFilter(v)} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
        {stories.length == 0
          ? <p className="p-4 bg-light rounded">No Stories found</p>
          : stories
              .filter(
                _ =>
                  _.header.toLowerCase().includes(filter.toLowerCase()) ||
                  _.link.toLowerCase().includes(filter.toLowerCase())
              )
              .map(item => <Blogcard key={item._id} {...item} />)}
      </div>
    </div>
  );
}

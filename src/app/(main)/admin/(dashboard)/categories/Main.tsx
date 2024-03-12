"use client";

import SearchInput from "@/components/ui/SearchInput";
import Categorycard from "./CategoryCard";
import { ApiCategoryData } from "@/utils/types/companyTypes";
import { useState } from "react";

type Props = {
  categories: ApiCategoryData[];
};

export default function Main({ categories }: Props) {
  const [filter, setFilter] = useState("");
  return (
    <div className="p-4">
      <div className="flex justify-between max-md:flex-col pb-4 gap-1">
        <h1 className="text-2xl font-bold">Categories</h1>

        <SearchInput onSearch={v => setFilter(v)} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
        {categories
          .filter(_ => _.title.toLowerCase().includes(filter.toLowerCase()))
          .map(dummy => <Categorycard key={dummy._id} {...dummy} />)}
      </div>
    </div>
  );
}

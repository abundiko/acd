"use client";

import NewsCard from "./NewsCard";
import { ApiNewsletterData } from "@/utils/types/companyTypes";
import { useState } from "react";
import SearchInput from "@/components/ui/SearchInput";

export default function Main({
  newsletters
}: {
  newsletters: ApiNewsletterData[];
}) {
  const [filter, setFilter] = useState("");
  return (
    <div className="p-4">
      <div className="flex justify-between max-md:flex-col pb-4">
        <h1 className="text-2xl font-bold">Newsletter</h1>

        <SearchInput onSearch={v => setFilter(v)} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
        {newsletters.length == 0
          ? <p className="p-4 bg-light rounded">No Newsletters found</p>
          : newsletters
              .filter(_ => _.email.toLowerCase().includes(filter.toLowerCase()))
              .map(item => <NewsCard key={item._id} {...item} />)}
      </div>
    </div>
  );
}

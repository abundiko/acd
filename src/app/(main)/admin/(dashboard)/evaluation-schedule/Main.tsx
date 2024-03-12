"use client";

import EvaluationCard from "./EvaluationCard";
import { ApiEvaluationData } from "@/utils/types/companyTypes";
import SearchInput from "@/components/ui/SearchInput";
import { useState } from "react";

interface Props {
  evaluation: ApiEvaluationData[];
}

export default function Main({ evaluation }: Props) {
  const [filter, setFilter] = useState("");
  return (
    <div className="p-4">
      <div className="flex justify-between max-md:flex-col gap-1 pb-4">
        <h1 className="text-2xl font-bold">Evaluation Schedule</h1>

        <SearchInput onSearch={v => setFilter(v)} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
        {evaluation
          .filter(
            _ =>
              _.email.toLowerCase().includes(filter.toLowerCase()) ||
              _.bookDate.toLowerCase().includes(filter.toLowerCase()) ||
              _.phone.toLowerCase().includes(filter.toLowerCase())
          )
          .map(item => <EvaluationCard key={item._id} {...item} />)}
      </div>
    </div>
  );
}

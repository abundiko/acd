"use client";

import SearchInput from "@/components/ui/SearchInput";
import { useState } from "react";
import Teamcard from "./TeamCard";
import { ApiTeamData } from "@/utils/types/companyTypes";

interface Props {
  team: ApiTeamData[];
}

export default function Main({ team }: Props) {
  const [filter, setFilter] = useState("");
  return (
    <div className="p-4">
      <div className="flex justify-between max-md:flex-col pb-4 gap-1">
        <h1 className="text-2xl font-bold">Experts</h1>

        <SearchInput onSearch={v => setFilter(v)} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
        {team.length == 0
          ? <p className="p-4 bg-light rounded">No team members found</p>
          : team
              .filter(
                _ =>
                  _.name.toLowerCase().includes(filter.toLowerCase()) ||
                  _.role.toLowerCase().includes(filter.toLowerCase())
              )
              .map(item => <Teamcard key={item._id} {...item} />)}
      </div>
    </div>
  );
}

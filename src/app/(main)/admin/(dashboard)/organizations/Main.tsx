"use client";

import SearchInput from "@/components/ui/SearchInput";
import { ApiOrganizationData } from "@/utils/types/companyTypes";
import { useState } from "react";
import OrgCard from "./OrgCard";

export default function Main({
  organizations,
}: {
  organizations: ApiOrganizationData[];
}) {
  const [filter, setFilter] = useState("");
  return (
    <div className="p-4">
      <div className="flex justify-between max-md:flex-col mb-4 gap-2">
        <h1 className="text-2xl font-bold">Organizations</h1>

        <SearchInput onSearch={(v) => setFilter(v)} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
        {organizations.length == 0 ? (
          <p className="p-4 bg-light rounded">No Organizations</p>
        ) : (
          organizations
            .filter(
              (_) =>
                _.name.toLowerCase().includes(filter.toLowerCase()) ||
                _.location.toLowerCase().includes(filter.toLowerCase()) ||
                _.category.toLowerCase().includes(filter.toLowerCase())
            )
            .map((item) => <OrgCard key={item._id} {...item} />)
        )}
      </div>
    </div>
  );
}

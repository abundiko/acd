"use client";

import LogoCard from "./LogoCard";
import { ApiLogoData } from "@/utils/types/companyTypes";
import SearchInput from "@/components/ui/SearchInput";

type Props = {
  logos: ApiLogoData[];
};

export default function Main({ logos }: Props) {
  return (
    <div className="p-4">
      <div className="flex justify-between max-md:flex-col pb-4 gap-1">
        <h1 className="text-2xl font-bold">logos</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
        {logos.length == 0
          ? <p className="p-4 bg-light rounded">No logos found</p>
          : logos.map(item => <LogoCard key={item._id} {...item} />)}
      </div>
    </div>
  );
}

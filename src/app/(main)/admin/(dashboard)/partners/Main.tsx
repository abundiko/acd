"use client";

import { ApiLogoData } from "@/utils/types/companyTypes";
import PartnerCard from "./PartnerCard";

type Props = {
  partners: ApiLogoData[];
};

export default function Main({ partners }: Props) {
  return (
    <div className="p-4">
      <div className="flex justify-between max-md:flex-col pb-4 gap-1">
        <h1 className="text-2xl font-bold">Partners</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
        {partners.length == 0 ? (
          <p className="p-4 bg-light rounded">No partners</p>
        ) : (
          partners.map((item) => <PartnerCard key={item._id} {...item} />)
        )}
      </div>
    </div>
  );
}

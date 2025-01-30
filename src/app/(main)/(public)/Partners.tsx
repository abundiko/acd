/* eslint-disable @next/next/no-img-element */
import { ApiLogoData } from "@/utils/types/companyTypes";

export default function Partners({ data }: { data: ApiLogoData[] }) {
  return (
    <div className="container py-10 md:py-16">
      <h3 className="font-semibold text-xl md:text-2xl text-center mb-6">
        Our Partners
      </h3>
      <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
        {data.map((i, j) => (
          <img key={j} src={i.img} className="w-[30%] md:!w-3/12 lg:!w-[15%] object-contain" alt="partner logo" />
        ))}
      </div>
    </div>
  );
}

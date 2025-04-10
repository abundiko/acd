/* eslint-disable @next/next/no-img-element */
import { ApiLogoData } from "@/utils/types/companyTypes";
import Marquee from "react-fast-marquee";

export default function Partners({ data }: { data: ApiLogoData[] }) {
  return (
    <div className="container py-10 md:py-16">
      <h3 className="font-semibold text-xl md:text-2xl text-center mb-6">
        Our Partners
      </h3>
      <Marquee className="gap-4"
      autoFill
      >
        {data.map((i, j) => (
          <img key={j} src={i.img} className="h-20 object-contain mr-4 md:mr-8" alt="partner logo" />
        ))}
      </Marquee>
    </div>
  );
}

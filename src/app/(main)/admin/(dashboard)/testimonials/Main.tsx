"use client";

import SearchInput from "@/components/ui/SearchInput";
import { useState } from "react";
import Testimonialcard from "./TestimonialCard";
import { ApiTestimonialData } from "@/utils/types/companyTypes";

interface Props {
  testimonials: ApiTestimonialData[];
}

export default function Main({ testimonials }: Props) {
  const [filter, setFilter] = useState("");
  return (
    <div className="p-4">
      <div className="flex justify-between max-md:flex-col pb-4 gap-1">
        <h1 className="text-2xl font-bold">Testimonials</h1>

        <SearchInput onSearch={(v) => setFilter(v)} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
        {testimonials.length == 0 ? (
          <p className="p-4 bg-light rounded">No testimonial found</p>
        ) : (
          testimonials
            .filter(
              (_) =>
                _.fullname.toLowerCase().includes(filter.toLowerCase()) ||
                _.label.toLowerCase().includes(filter.toLowerCase())
            )
            .map((item) => <Testimonialcard key={item._id} {...item} />)
        )}
      </div>
    </div>
  );
}

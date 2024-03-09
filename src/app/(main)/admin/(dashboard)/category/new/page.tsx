"use client";

import AppInput, { AppInputProps } from "@/components/ui/AppInput";
import FormButton from "@/components/ui/FormButton";
import { z } from "zod";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col gap-2 p-3 md:p-4 max-w-[500px] mx-auto rounded md:border w-full mt-4">
      <h1 className="r-text-xl r-font-bold">Add new category</h1>
      <form className="flex flex-col gap-3 py-3">
        {formFields.map((item) => {
          return <AppInput key={item.name} {...item} />;
        })}
        <FormButton className="btn-primary">Submit</FormButton>
      </form>
    </div>
  );
}

const formFields: AppInputProps[] = [
  {
    name: "title",
    title: "category",
    type: "category",
    placeholder: "category",
    schema: z.string().min(1, "Category is required"),
  },
];

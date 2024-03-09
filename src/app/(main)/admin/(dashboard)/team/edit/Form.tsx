"use client";

import AppInput, { AppInputProps } from "@/components/ui/AppInput";
import FormButton from "@/components/ui/FormButton";
import { z } from "zod";
import React from "react";
import { TeamcardProps } from "../TeamCard";

export type Expert = TeamcardProps & {
  comment: string;
  file: string;
};

export default function Form({
  file,
  name,
  role,
  comment,
  instagram,
  facebook,
  twitter,
}: Expert) {
  const formFields: AppInputProps[] = [
    {
      name: "file",
      title: "Upload Photo",
      type: "file",
      value: file,
      placeholder: "file",
      schema: z.string().min(5, "name too short"),
    },
    {
      name: "name",
      title: "Name",
      type: "text",
      value: name,
      placeholder: "Name",
      schema: z.string().min(5, "name too short"),
    },
    {
      name: "role",
      title: "Role",
      type: "text",
      value: role,
      placeholder: "team member role",
      schema: z.string().min(1, "role is required"),
    },
    {
      name: "comment",
      title: "Comment",
      textarea: true,
      type: "string",
      value: comment,
      placeholder: "Comment",
      schema: z.string(),
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "url",
      value: instagram,
      placeholder: "instagram link",
      schema: z.string(),
    },
    {
      name: "facebook",
      title: "Facebook",
      type: "url",
      value: facebook,
      placeholder: "facebook link",
      schema: z.string(),
    },
    {
      name: "twitter",
      title: "Twitter",
      type: "url",
      value: twitter,
      placeholder: "twitter link",
      schema: z.string(),
    },
  ];

  return (
    <div className="flex flex-col gap-2 p-3 md:p-4 max-w-[500px] mx-auto rounded md:border w-full mt-4">
      <h1 className="r-text-xl r-font-bold">Edit Expert</h1>
      <form className="flex flex-col gap-3 py-3">
        {formFields.map((item) => {
          return <AppInput key={item.name} {...item} />;
        })}
        <FormButton className="btn-primary">Submit</FormButton>
      </form>
    </div>
  );
}

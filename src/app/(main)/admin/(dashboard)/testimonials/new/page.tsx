"use client";

import AppInput, { AppInputProps } from "@/components/ui/AppInput";
import FormButton from "@/components/ui/FormButton";
import { z } from "zod";
import React, { useState } from "react";
import AdminAuth from "@/components/AdminAuth";
import FormMessage from "@/components/ui/FormMessage";
import useFormSubmit from "@/hooks/useFormSubmit";
import { API } from "@/utils/constants";
import { getCookie } from "@/utils/functions/cookies";
import { ApiFormMessage } from "@/utils/types/basicTypes";
import revalidateRoutes from "@/serverActions";

export default function Page() {
  const [errors, setErrors] = useState([true, true, true, true]);
  const {
    formProps: { onSubmit, key },
    formState,
    setErrorMessage,
    setSuccessMessage,
    reset,
  } = useFormSubmit<ApiFormMessage>({
    url: `${API}admin/addtestimonial  `,
    hasFile: "file",
    headers: {
      "x-access-token": getCookie("token") ?? "",
    },
    onComplete(data) {
      if (!data.message || !data) return setErrorMessage("An error occurred");
      if (data.message === "testimonial added") {
        revalidateRoutes(["/admin/testimonials", "/"]);
        reset();
        return setSuccessMessage("Testimonials Uploaded Successfully");
      }
      setErrorMessage(data.message);
    },
  });
  return (
    <div className="flex flex-col gap-2 p-3 md:p-4 max-w-[500px] mx-auto rounded md:border w-full mt-4  bg-light shadow">
      <h1 className="r-text-xl r-font-bold">New Testimonials</h1>
      <form onSubmit={onSubmit} key={key} className="flex flex-col gap-3 py-3">
        <AdminAuth />
        {formFields.map((item, i) => {
          return (
            <AppInput
              key={item.name}
              {...item}
              onErrorChange={(hasError) => {
                setErrors((prev) =>
                  prev.map((error, index) => (index === i ? hasError : error))
                );
              }}
            />
          );
        })}
        <FormMessage {...formState} />
        <FormButton
          loading={formState.loading}
          disabled={errors.includes(true)}
          className="btn-primary"
        >
          Submit
        </FormButton>
      </form>
    </div>
  );
}

const formFields: AppInputProps[] = [
  {
    name: "file",
    title: "Upload Photo",
    type: "file",
    placeholder: "file",
    schema: z.string().min(1, "select a file"),
    required: true,
  },
  {
    name: "fullname",
    title: "Full Name",
    type: "text",
    placeholder: "Name",
    schema: z.string().min(5, "Fullname too short"),
    required: true,
  },
  {
    name: "label",
    title: "Label",
    type: "text",
    placeholder: "Label",
    schema: z.string().min(1, "this field is required"),
    required: true,
  },
  {
    name: "message",
    title: "Message",
    type: "text",
    placeholder: "message",
    textarea: true,
    schema: z.string().min(1, "this field is required"),
    required: true,
  },

  {
    name: "instagram",
    title: "Instagram",
    type: "url",
    placeholder: "instagram link",
    schema: z.string(),
  },
  {
    name: "facebook",
    title: "Facebook",
    type: "url",
    placeholder: "facebook link",
    schema: z.string(),
  },
  {
    name: "twitter",
    title: "Twitter",
    type: "url",
    placeholder: "twitter link",
    schema: z.string(),
  },
];

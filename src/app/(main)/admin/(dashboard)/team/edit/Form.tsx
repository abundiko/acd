"use client";

import AppInput, { AppInputProps } from "@/components/ui/AppInput";
import FormButton from "@/components/ui/FormButton";
import { z } from "zod";
import React, { useState } from "react";
import { ApiTeamData } from "@/utils/types/companyTypes";
import AdminAuth from "@/components/AdminAuth";
import FormMessage from "@/components/ui/FormMessage";
import useFormSubmit from "@/hooks/useFormSubmit";
import revalidateRoutes from "@/serverActions";
import { API } from "@/utils/constants";
import { getCookie } from "@/utils/functions/cookies";
import { ApiFormMessage } from "@/utils/types/basicTypes";
import { useRouter } from "next/navigation";

export default function Form({
  img,
  name,
  role,
  comment,
  instagram,
  facebook,
  twitter,
  _id
}: ApiTeamData) {
  const formFields: AppInputProps[] = [
    {
      name: "file",
      title: "Upload Photo",
      type: "file",
      placeholder: "file",
      schema: z.string()
    },
    {
      name: "name",
      title: "Full Name",
      type: "text",
      value: name,
      placeholder: "Name",
      schema: z.string().min(5, "fullname too short")
    },
    {
      name: "role",
      title: "Role",
      type: "text",
      value: role,
      placeholder: "team member role",
      schema: z.string().min(1, "role is required")
    },
    {
      name: "comment",
      title: "Comment",
      textarea: true,
      type: "string",
      value: comment,
      placeholder: "Comment",
      schema: z.string().min(1, "comment is required")
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "url",
      value: instagram,
      placeholder: "instagram link",
      schema: z.string()
    },
    {
      name: "facebook",
      title: "Facebook",
      type: "url",
      value: facebook,
      placeholder: "facebook link",
      schema: z.string()
    },
    {
      name: "twitter",
      title: "Twitter",
      type: "url",
      value: twitter,
      placeholder: "twitter link",
      schema: z.string()
    }
  ];
const router = useRouter();
const [errors, setErrors] = useState([false, true, true, true]);
  const {
    formProps: { onSubmit, key },
    formState,
    setErrorMessage,
    setSuccessMessage,
  } = useFormSubmit<ApiFormMessage>({
    url: `${API}admin/editteam`,
    hasFile: "file",
    headers: {
      'x-access-token': getCookie("token") ?? "",
    },
    onComplete(data) {
      if (!data.message || !data) return setErrorMessage("An error occurred");
      if (data.message === "team member updated") {
        revalidateRoutes([
          '/admin/team',
          '/'
        ])
        router.back();
        return setSuccessMessage("Expert Updated Successfully");
      }
      setErrorMessage(data.message);
    }
  });

  return (
    <div className="flex flex-col gap-2 p-3 md:p-4 max-w-[500px] mx-auto rounded md:border w-full mt-4  bg-light shadow">
      <h1 className="r-text-xl r-font-bold">Edit Expert</h1>
      <form onSubmit={onSubmit} key={key} className="flex flex-col gap-3 py-3">
<AdminAuth />
<input type="hidden" name="teamid" value={_id} hidden />
        <img src={img} alt={name} className="rounded-lg size-8 object-cover" />
        {formFields.map((item, i) => {
          return <AppInput key={item.name} {...item}
onErrorChange={hasError => {
                setErrors(prev =>
                  prev.map((error, index) => (index === i ? hasError : error))
                );
              }}
           />;
        })}
        <FormMessage {...formState} />
        <FormButton loading={formState.loading}
          disabled={errors.includes(true)} className="btn-primary">Submit</FormButton>
      </form>
    </div>
  );
}

"use client";

import AppInput, { AppInputProps } from "@/components/ui/AppInput";
import FormButton from "@/components/ui/FormButton";
import { z } from "zod";
import React, { useState } from "react";
import useFormSubmit from "@/hooks/useFormSubmit";
import FormMessage from "@/components/ui/FormMessage";
import { API } from "@/utils/constants";
import { ApiFormMessage } from "@/utils/types/basicTypes";
import { getCookie } from "@/utils/functions/cookies";
import AdminAuth from "@/components/AdminAuth";
import revalidateRoutes from "@/serverActions";

export default function Page() {
  const [errors, setErrors] = useState([true]);
  const {
    formProps: { onSubmit, key },
    formState,
    setErrorMessage,
    setSuccessMessage,
    reset
  } = useFormSubmit<ApiFormMessage>({
    url: `${API}admin/addlogo`,
    hasFile: true,
    onComplete(data) {
      if (!data.message || !data) return setErrorMessage("An error occurred");
      if (data.message === "logo added") {
        revalidateRoutes([
          "/admin/featured-logos/new",
          "/admin/featured-logos",
          "/"
        ]);
        reset();
        return setSuccessMessage("Logo uploaded successfully");
      }
      setErrorMessage(data.message);
    }
  });
  return (
    <div className="flex flex-col gap-2 p-3 md:p-4 max-w-[500px] mx-auto rounded md:border w-full mt-4  bg-light shadow">
      <h1 className="r-text-xl r-font-bold">Add Featured Logo</h1>
      <form onSubmit={onSubmit} key={key} className="flex flex-col gap-3 py-3">
        <FormMessage {...formState} />
        <AdminAuth />

        {formFields.map((item, i) => {
          return (
            <AppInput
              key={item.name}
              {...item}
              onErrorChange={hasError => {
                setErrors(prev =>
                  prev.map((error, index) => (index === i ? hasError : error))
                );
              }}
            />
          );
        })}
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
    title: "Logo Image",
    type: "file",
    schema: z.string().min(1, "Select an Image first"),
    placeholder: ""
  }
];

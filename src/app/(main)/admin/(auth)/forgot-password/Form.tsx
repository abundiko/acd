"use client";

import AppInput, { AppInputProps } from "@/components/ui/AppInput";
import FormButton from "@/components/ui/FormButton";
import FormMessage from "@/components/ui/FormMessage";
import useFormSubmit from "@/hooks/useFormSubmit";
import { API } from "@/utils/constants";
import { setCookie } from "@/utils/functions/cookies";
import { ApiSignupData } from "@/utils/types/userTypes";
import router from "next/router";
import { useState } from "react";
import { z } from "zod";

export default function ForgotPasswordForm() {
  const [isValidEmail, setEmailValid] = useState(false);

  const {
    formProps: { onSubmit, key },
    formState,
    setErrorMessage,
    setSuccessMessage,
    reset,
  } = useFormSubmit<ApiSignupData>({
    url: `${API}forgot`,
    onComplete(data) {
      if (!data.message || !data) return setErrorMessage("An error occurred");
      if (data.message === "login successful") {
        reset();
        setSuccessMessage("Signed In Successfully");
        setCookie("token", data.token, 24 * 30);
        setCookie("email", data.data.email, 24 * 30);
        router.replace("/admin");
        return;
      } else setErrorMessage(data.message);
    },
  });

  return (
    <form onSubmit={onSubmit} key={key} className="flex flex-col gap-3 py-3">
      <FormMessage {...formState} />
      {<AppInput key={fields[0].name} {...fields[0]} />}
      {isValidEmail && <AppInput key={fields[1].name} {...fields[1]} />}
      <FormButton loading={formState.loading} className="btn-primary">
        {isValidEmail ? "Reset Password" : "Verify Email"}
      </FormButton>
    </form>
  );
}

const fields: AppInputProps[] = [
  {
    name: "email",
    title: "Email",
    type: "email",
    placeholder: "Email Address",
    schema: z.string(),
    required: true,
  },
  {
    name: "code",
    title: "Reset Code",
    type: "number",
    placeholder: "Enter Reset Code",
    schema: z.string(),
    required: true,
  },
];

"use client";

import AppInput, { AppInputProps } from "@/components/ui/AppInput";
import FormButton from "@/components/ui/FormButton";
import FormMessage from "@/components/ui/FormMessage";
import useFormSubmit from "@/hooks/useFormSubmit";
import { useAdminState } from "@/state/adminStore";
import { API } from "@/utils/constants";
import { setCookie } from "@/utils/functions/cookies";
import { ApiSignupData } from "@/utils/types/userTypes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

export default function LoginForm() {
  const setUser = useAdminState(s => s.setUser);
  const [errors, setErrors] = useState([true, true]);
  const router = useRouter();
  const {
    formProps: { onSubmit, key },
    formState,
    setErrorMessage,
    setSuccessMessage,
    reset
  } = useFormSubmit<ApiSignupData>({
    url: `${API}register`,
    onComplete(data) {
      if (!data.message || !data) return setErrorMessage("An error occurred");
      if (data.message === "account created") {
        reset();
        setSuccessMessage("Account Created Successfully");
        setCookie("token", data.token, 24 * 30);
        setCookie("email", data.data.email, 24 * 30);
        setUser(data.data);
        router.replace("/admin");
        return;
      }
      setErrorMessage(data.message);
    }
  });

  return (
    <form onSubmit={onSubmit} key={key} className="flex flex-col gap-3 py-3">
      <FormMessage {...formState} />
      {loginFields.map((item, i) => {
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
        disabled={errors.includes(true)}
        loading={formState.loading}
        className="btn-primary"
      >
        Sign Up
      </FormButton>
    </form>
  );
}

const loginFields: AppInputProps[] = [
  {
    name: "email",
    title: "Email",
    type: "email",
    placeholder: "Email Address",
    schema: z.string().email("enter a vilad email")
  },
  {
    name: "password",
    title: "Password",
    type: "password",
    placeholder: "Enter your Password",
    schema: z.string().min(6, "password is too short")
  }
];

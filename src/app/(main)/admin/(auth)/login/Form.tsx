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
import { z } from "zod";

export default function LoginForm() {
  const setUser = useAdminState(s => s.setUser);
  const router = useRouter();
  const {
    formProps: { onSubmit, key },
    formState,
    setErrorMessage,
    setSuccessMessage,
    reset
  } = useFormSubmit<ApiSignupData>({
    url: `${API}`,
    onComplete(data) {
      if (!data.message || !data) return setErrorMessage("An error occurred");
      if (data.message === "login successful") {
        reset();
        setSuccessMessage("Signed In Successfully");
        setCookie("token", data.token, 24 * 30);
        setCookie("email", data.data.email, 24 * 30);
        setUser(data.data);
        router.replace("/admin");
        return;
      } else setErrorMessage(data.message);
    }
  });

  return (
    <form onSubmit={onSubmit} key={key} className="flex flex-col gap-3 py-3">
      <FormMessage {...formState} />
      {loginFields.map((item, i) => {
        return <AppInput key={item.name} {...item} />;
      })}
      <FormButton loading={formState.loading} className="btn-primary">
        Sign In
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
    required: true,
    schema: z.string()
  },
  {
    name: "password",
    title: "Password",
    type: "password",
    placeholder: "Enter your Password",
    required: true,
    schema: z.string()
  }
];

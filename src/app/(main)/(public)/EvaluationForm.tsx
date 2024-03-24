"use client";
import { Mail, Call, Location } from "react-huge-icons/solid";
import DatePicker from "@/components/DatePicker";
import AppInput, { AppInputProps } from "@/components/ui/AppInput";
import FormMessage from "@/components/ui/FormMessage";
import useFormSubmit from "@/hooks/useFormSubmit";
import { API } from "@/utils/constants";
import { ApiFormMessage } from "@/utils/types/basicTypes";
import { z } from "zod";
import { useState } from "react";
import { useCookies } from "@/hooks/useCookies";
// import { deleteCookie, getCookie } from "@/utils/functions/cookies";

export default function EvaluationForm() {
  const [errors, setErrors] = useState([true]);
  const {getCookie, deleteCookie} = useCookies();
  const {
    formProps: { onSubmit, key },
    formState,
    setErrorMessage,
    setSuccessMessage,
    reset,
  } = useFormSubmit<ApiFormMessage>({
    url: `${API}evaluation`,
    onComplete(data) {
      if (!data.message || !data) return setErrorMessage("An error occurred");
      if (data.message === "evaluation uploaded") {
        deleteCookie("evaluation-date");
        reset();
        return setSuccessMessage("Request Sent Successfully");
      }
      setErrorMessage(data.message);
    },
  });

  return (
    <form onSubmit={onSubmit} key={key}>
      <h4>Contacts</h4>
      <p>These contacts are used to reach you or your representative.</p>
      <div className="flex flex-col w-full gap-2">
        <FormMessage {...formState} />
        {formFields.map((item, i) => (
          <AppInput
            key={item.name}
            {...item}
           
          />
        ))}
        <DatePicker
          value={getCookie("evaluation-date") ?? ""}
          onValueChange={(_) => {
            console.log(errors);
            setErrors((prev) =>
              prev.map((error, index) => (index === 0 ? false : error))
            );
          }}
        />
      </div>

      <input
        disabled={formState.loading || errors.includes(true)}
        className=" bg-primary text-light disabled cursor-pointer"
        type="submit"
        value={formState.loading ? "loading..." : "Submit Application →"}
        id="submit_form"
      />
    </form>
  );
}

const formFields: AppInputProps[] = [
  {
    type: "email",
    name: "email",
    placeholder: "example@gmail.com",
    required: true,
    icon: <Mail />,
    schema: z.string(),
  },
  {
    type: "text",
    name: "phone",
    placeholder: "+234 703 1111 2222",
    required: true,
    icon: <Call />,
    schema: z.string(),
  },
  {
    type: "text",
    name: "address",
    placeholder: "Enter Location Address",
    required: true,
    icon: <Location />,
    schema: z.string(),
  },
];

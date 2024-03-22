"use client";

import AppInput, { AppInputProps } from "@/components/ui/AppInput";
import FormButton from "@/components/ui/FormButton";
import { z } from "zod";
import React, { useState } from "react";
import FormMessage from "@/components/ui/FormMessage";
import AdminAuth from "@/components/AdminAuth";
import useFormSubmit from "@/hooks/useFormSubmit";
import { API, NIGERIAN_STATES } from "@/utils/constants";
import { ApiFormMessage } from "@/utils/types/basicTypes";
import { getCookie } from "@/utils/functions/cookies";
import revalidateRoutes from "@/serverActions";
import { ApiCategoryData } from "@/utils/types/companyTypes";
import CategorySelect from "@/components/OrgSelect";

type Props = {
  categories: ApiCategoryData[];
};

export default function NewOrgForm({ categories }: Props) {
  const [errors, setErrors] = useState([
    ...Array.from({ length: 9 }, () => true),
  ]);
  const {
    formProps: { onSubmit, key },
    formState,
    setErrorMessage,
    setSuccessMessage,
    reset,
  } = useFormSubmit<ApiFormMessage>({
    url: `${API}admin/addstats`,
    headers: {
      "x-access-token": getCookie("token") ?? "",
    },
    onComplete(data) {
      if (!data.message || !data) return setErrorMessage("An error occurred");
      if (data.message === "evaluation uploaded") {
        revalidateRoutes(["/admin/organizations", "/dashoard/[id]"]);
        reset();
        return setSuccessMessage("Evaluation uploaded successfully");
      }
      setErrorMessage(data.message);
    },
  });

  let prevCategoryName = "";
  let prevCategoryId = "";
  for (let i = 0; i < categories.length; i++) {
    if (categories[i] && categories[i].subcategories.length > 0) {
      prevCategoryName = categories[i].subcategories[0].name;
      prevCategoryId = categories[i].subcategories[0]._id;
      break;
    }
  }

  return (
    <div className="flex flex-col gap-2 p-3 md:p-4 max-w-[500px] mx-auto rounded md:border w-full mt-4  bg-light shadow">
      <h1 className="r-text-xl r-font-bold">Add New Company Data</h1>
      <form onSubmit={onSubmit} key={key} className="flex flex-col gap-3 py-3">
        <AdminAuth />
        {orgFields.map((item, i) => {
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
        <div>
          <label htmlFor="location" className="pb-2">
            Location
          </label>
          <select name="location" className="select-option">
            {NIGERIAN_STATES.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="category" className="pb-2">
            categories
          </label>
          <CategorySelect
            categories={categories}
            lastOrgCategory={prevCategoryName}
            value={prevCategoryId}
            onChange={(e) => {}}
          />
        </div>
        <p className="text-lg py-4">Sercurity Rating</p>
        {securityFields.map((item) => {
          return (
            <div key={item.title}>
              <label className="pb-2">{item.title}</label>
              <select name={item.name} className="select-option">
                {["Available", "Not Available"].map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
        <p className="text-lg py-4">Structural Compliance matrics</p>
        {compFields.map((item, i) => {
          return (
            <AppInput
              key={item.name}
              {...item}
              onErrorChange={(hasError) => {
                setErrors((prev) =>
                  prev.map((error, index) =>
                    index === i + orgFields.length ? hasError : error
                  )
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

const orgFields: AppInputProps[] = [
  {
    name: "name",
    title: "Name of Organization",
    type: "text",
    placeholder: "Name of Organization",
    schema: z.string().min(5, "organization name is required"),
    required: true,
  },
  {
    name: "quota",
    title: " 5% Employment Quota",
    type: "number",
    placeholder: "enployment quota",
    schema: z.string().regex(/^(?:100|\d{1,2})$/, "provide numbers 1 - 100"),
    required: true,
  },
  {
    name: "rating",
    title: "Accessibility rating",
    type: "number",
    placeholder: "accessibility rating",
    schema: z.string().regex(/^(?:100|\d{1,2})$/, "provide numbers 1 - 100"),
    required: true,
  },
  {
    name: "srating",
    title: "Total sercurity rating",
    type: "number",
    placeholder: "Total sercurity rating",
    schema: z.string().regex(/^(?:100|\d{1,2})$/, "provide numbers 1 - 100"),
    required: true,
  },
  {
    name: "compScore",
    title: "Compliance Score",
    type: "number",
    placeholder: "Compliance score",
    schema: z.string().regex(/^(?:100|\d{1,2})$/, "provide numbers 1 - 100"),
    required: true,
  },
];

const securityFields: {
  name: string;
  title: string;
}[] = [
  {
    name: "spost",
    title: "Presence of sercurity post",
  },
  {
    name: "camera",
    title: "presence of surveillance Camera",
  },
  {
    name: "point",
    title: "Muster Point",
  },
  {
    name: "emergency",
    title: "Emergency Exit",
  },
];

const compFields: AppInputProps[] = [
  {
    name: "external",
    title: "External",
    type: "number",
    placeholder: "external",
    schema: z.string().regex(/^(?:100|\d{1,2})$/, "provide numbers 1 - 100"),
    required: true,
  },
  {
    name: "goods",
    title: "Goods",
    type: "number",
    placeholder: "goods",
    schema: z.string().regex(/^(?:100|\d{1,2})$/, "provide numbers 1 - 100"),
    required: true,
  },
  {
    name: "fixtures",
    title: "Fixtures",
    type: "number",
    placeholder: "fixtures",
    schema: z.string().regex(/^(?:100|\d{1,2})$/, "provide numbers 1 - 100"),
    required: true,
  },
  {
    name: "amenities",
    title: "Amenities",
    type: "number",
    placeholder: "amenities",
    schema: z.string().regex(/^(?:100|\d{1,2})$/, "provide numbers 1 - 100"),
    required: true,
  },
];

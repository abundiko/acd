"use client";

import AppInput, { AppInputProps } from "@/components/ui/AppInput";
import FormButton from "@/components/ui/FormButton";
import { z } from "zod";
import React, { useState } from "react";
import {
  ApiCategoryData,
  ApiOrganizationData,
  Availaboolean,
} from "@/utils/types/companyTypes";
import { API, NIGERIAN_STATES, formSchemas } from "@/utils/constants";
import AdminAuth from "@/components/AdminAuth";
import FormMessage from "@/components/ui/FormMessage";
import useFormSubmit from "@/hooks/useFormSubmit";
import revalidateRoutes from "@/serverActions";
import { getCookie } from "@/utils/functions/cookies";
import { ApiFormMessage } from "@/utils/types/basicTypes";
import { useRouter } from "next/navigation";
import CategorySelect from "@/components/OrgSelect";
import PolicyInputField from "@/components/ui/PolicyInputField";

export default function Page({
  _id,
  name,
  quota,
  location,
  category,
  compScore,
  rating,
  srating,
  external,
  goods,
  fixtures,
  amenities,
  spost: spost,
  camera,
  point,
  emergency,
  categories,
  employessWithDisability,
  numberOfEmployees,
  policy,
}: ApiOrganizationData & { categories: ApiCategoryData[] }) {
  const orgFields: AppInputProps[] = [
    {
      name: "name",
      title: "Name of Organization",
      type: "text",
      value: name,
      placeholder: "Name of Organization",
      schema: z.string().min(5, "organization name is required"),
    },
    {
      name: "quota",
      title: " 5% Employment Quota",
      type: "number",
      value: quota,
      placeholder: "quota",
      schema: z.string().min(1, "role is required"),
    },
    {
      name: "numberOfEmployees",
      title: " Number of employees",
      type: "number",
      placeholder: "number of employees",
      schema: formSchemas.validNumber,
      value: numberOfEmployees,
    },
    {
      name: "employessWithDisability",
      title: "Employees with disabilities",
      type: "number",
      placeholder: "enployees with disabilities",
      schema: formSchemas.validNumber,
      value: employessWithDisability,
    },
    {
      name: "rating",
      title: "Accessibility rating",
      type: "number",
      value: rating,
      placeholder: "accessibility rating",
      schema: z.string().min(1, "this field is required"),
    },
    {
      name: "srating",
      title: "Total sercurity rating",
      type: "number",
      value: srating,
      placeholder: "Total sercurity rating",
      schema: z.string().min(1, "this field is required"),
    },
    {
      name: "compScore",
      title: "Compliance Score",
      type: "number",
      value: compScore,
      placeholder: "Compliance Score",
      schema: formSchemas.validNumber,
      required: true,
    },
  ];

  const securityFields: {
    name: string;
    title: string;
    value: Availaboolean;
  }[] = [
    { name: "spost", title: "Presence of sercurity post", value: spost },
    { name: "camera", title: "presence of surveillance Camera", value: camera },
    { name: "point", title: "Muster Point", value: point },
    { name: "emergency", title: "Emergency Exit", value: emergency },
  ];

  const compFields: AppInputProps[] = [
    {
      name: "external",
      title: "External Way Finding",
      type: "number",
      placeholder: "external",
      value: external,
      schema: formSchemas.validNumber,
      required: true,
    },
    {
      name: "goods",
      title: "Accessible Goods & Services",
      type: "number",
      placeholder: "goods",
      value: goods,
      schema: formSchemas.validNumber,
      required: true,
    },
    {
      name: "fixtures",
      title: "Accessible Furniture, Fixtures & Utilities",
      type: "number",
      placeholder: "fixtures",
      value: fixtures,
      schema: formSchemas.validNumber,
      required: true,
    },
    {
      name: "amenities",
      title: "Accessible Additional Amenities",
      type: "number",
      placeholder: "amenities",
      value: amenities,
      schema: formSchemas.validNumber,
      required: true,
    },
  ];

  const router = useRouter();
  const [errors, setErrors] = useState([
    ...Array.from({ length: 9 }, () => true),
  ]);
  const {
    formProps: { onSubmit, key },
    formState,
    setErrorMessage,
    setSuccessMessage,
  } = useFormSubmit<ApiFormMessage>({
    url: `${API}admin/editstats`,
    headers: {
      "x-access-token": getCookie("token") ?? "",
    },
    onComplete(data) {
      if (!data.message || !data) return setErrorMessage("An error occurred");
      if (data.message === "organization updated") {
        revalidateRoutes([
          "/admin/organizations",
          "/admin/organizations/edit",
          "/dashoard/[id]",
        ]);
        setSuccessMessage("Evaluation Updated successfully");
        return router.replace("/admin/organizations");
      }
      setErrorMessage(data.message);
    },
  });

  let prevCategoryId = "";
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].subcategories.length > 0) {
      for (const sub of categories[i].subcategories) {
        if (sub.name === category) {
          prevCategoryId = sub._id;
          break;
        }
      }
    }
  }

  return (
    <div className="flex flex-col gap-2 p-3 md:p-4 max-w-[500px] mx-auto rounded md:border w-full mt-4  bg-light shadow">
      <h1 className="r-text-xl r-font-bold">Edit Company Data</h1>
      <form onSubmit={onSubmit} key={key} className="flex flex-col gap-3 py-3">
        <AdminAuth />
        <input type="hidden" name="statid" value={_id} hidden />
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
          <select className="select-option" defaultValue={location}>
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
            lastOrgCategory={category}
            value={prevCategoryId}
            onChange={(e) => {}}
          />
        </div>
        <p className="text-lg py-4">Sercurity Rating</p>
        {securityFields.map((item) => {
          return (
            <div key={item.title}>
              <label htmlFor="category" className="pb-2">
                {item.title}
              </label>
              <select name={item.name} className="select-option">
                {["Available", "Not Available"].map((e) => (
                  <option key={e} selected={e === item.value} value={e}>
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

        <PolicyInputField policy={policy} />
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

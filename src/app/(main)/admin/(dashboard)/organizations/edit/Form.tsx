"use client";

import AppInput, { AppInputProps } from "@/components/ui/AppInput";
import FormButton from "@/components/ui/FormButton";
import { z } from "zod";
import React, { useState } from "react";
import { OrgCardProps } from "../OrgCard";
import { ApiCategoryData, ApiOrganizationData, Availaboolean } from "@/utils/types/companyTypes";
import { API, NIGERIAN_STATES } from "@/utils/constants";
import AdminAuth from "@/components/AdminAuth";
import FormMessage from "@/components/ui/FormMessage";
import useFormSubmit from "@/hooks/useFormSubmit";
import revalidateRoutes from "@/serverActions";
import { getCookie } from "@/utils/functions/cookies";
import { ApiFormMessage } from "@/utils/types/basicTypes";
import { useRouter } from "next/navigation";
import CategorySelect from "@/components/OrgSelect";

export default function Page({
  _id,
  name,
  quota,
  location,
  category,
  compScore,
  rating,
  srating,
  building,
  entrance,
  room,
  paths,
  gtoilet,
  atoilet,
  lifts,
  spost: spost,
  camera,
  point,
  emergency,
  categories
}: ApiOrganizationData & { categories: ApiCategoryData[] }) {
  const orgFields: AppInputProps[] = [
    {
      name: "name",
      title: "Name of Organization",
      type: "text",
      value: name,
      placeholder: "Name of Organization",
      schema: z.string().min(5, "organization name is required")
    },
    {
      name: "quota",
      title: " 5% Employment Quota",
      type: "number",
      value: quota,
      placeholder: "quota",
      schema: z.string().min(1, "role is required")
    },
    {
      name: "rating",
      title: "Accessibility rating",
      type: "number",
      value: rating,
      placeholder: "accessibility rating",
      schema: z.string().min(1, "this field is required")
    },
    {
      name: "srating",
      title: "Total sercurity rating",
      type: "number",
      value: srating,
      placeholder: "Total sercurity rating",
      schema: z.string().min(1, "this field is required")
    },
    {
      name: "compScore",
      title: "Compliance Score",
      type: "number",
      value: compScore,
      placeholder: "Compliance Score",
      schema: z.string().regex(/^(?:100|\d{1,2})$/, "provide numbers 1 - 100"),
      required: true
    }
  ];

  

  const securityFields: {
    name: string;
    title: string;
    value: Availaboolean;
  }[] = [
    { name: "spost", title: "Presence of sercurity post", value: spost },
    { name: "camera", title: "presence of surveillance Camera", value: camera },
    { name: "point", title: "Muster Point", value: point },
    { name: "emergency", title: "Emergency Exit", value: emergency }
  ];

  const compFields: AppInputProps[] = [
    {
      name: "building",
      title: "Access to building (%score)",
      type: "number",
      value: building,
      placeholder: "access to building",
      schema: z.string().min(1, "this field is required")
    },
    {
      name: "entrance",
      title: "Entrance, Reception, waiting area (%score)",
      type: "number",
      value: entrance,
      placeholder: "Entrance, Reception, waiting area (%score)",
      schema: z.string().min(1, "this filed is required")
    },
    {
      name: "room",
      title: "Rooms/Halls/offices",
      type: "number",
      value: room,
      placeholder: "Rooms/Halls/offices",
      schema: z.string().min(1, "this field is required")
    },
    {
      name: "paths",
      title: "circulation paths/Internal way-finding",
      type: "number",
      value: paths,
      placeholder: "circulation paths/Internal way-finding",
      schema: z.string().min(1, "this field is required")
    },
    {
      name: "gtoilet",
      title: "general toilet",
      type: "number",
      value: gtoilet,
      placeholder: "general toilet",
      schema: z.string().min(1, "this field is required")
    },
    {
      name: "atoilet",
      title: "Accessible toilet",
      type: "number",
      value: atoilet,
      placeholder: "Accessible toilet",
      schema: z.string().min(1, "this field is required")
    },
    {
      name: "lifts",
      title: "Lifts/stair lifts",
      type: "number",
      value: lifts,
      placeholder: "Lifts/stair lifts",
      schema: z.string().min(1, "this field is required")
    }
  ];

  const router = useRouter();
  const [errors, setErrors] = useState([
    ...Array.from({ length: 12 }, () => true)
  ]);
  const {
    formProps: { onSubmit, key },
    formState,
    setErrorMessage,
    setSuccessMessage,
  } = useFormSubmit<ApiFormMessage>({
    url: `${API}admin/editstats`,
    headers: {
      'x-access-token': getCookie("token") ?? "",
    },
    onComplete(data) {
      if (!data.message || !data) return setErrorMessage("An error occurred");
      if (data.message === "organization updated") {
        revalidateRoutes([
          '/admin/organizations',
          '/admin/organizations/edit',
          '/dashoard/[id]',
        ]);
        setSuccessMessage("Evaluation Updated successfully");
        return router.replace('/admin/organizations');
      }
      setErrorMessage(data.message);
    }
  });

  let prevCategoryId = '';
  for (let i = 0; i < categories.length; i++) {
    if(categories[i].subcategories.length > 0) {
      for (const sub of categories[i].subcategories) {
        if(sub.name === category) {
        prevCategoryId = sub._id;
        break;
      }}
  }
}

  return (
    <div className="flex flex-col gap-2 p-3 md:p-4 max-w-[500px] mx-auto rounded md:border w-full mt-4  bg-light shadow">
      <h1 className="r-text-xl r-font-bold">Edit Company Data</h1>
      <form  onSubmit={onSubmit} key={key} className="flex flex-col gap-3 py-3">
        <AdminAuth />
        <input type="hidden" name="statid" value={_id} hidden />
        {orgFields.map((item,i) => {
          return <AppInput key={item.name} {...item} onErrorChange={hasError => {
                setErrors(prev =>
                  prev.map((error, index) => (index === i ? hasError : error))
                );
              }}/>;
        })}
        <div>
          <label htmlFor="location" className="pb-2">
            Location
          </label>
          <select className="select-option" defaultValue={location}>
            {NIGERIAN_STATES.map(e =>
              <option key={e} value={e}>
                {e}
              </option>
            )}
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
          onChange={e => {}} />
          {/* <select className="select-option" defaultValue={category}>
            {categories.map(e =>
              <option key={e} value={e}>
                {e}
              </option>
            )}
          </select> */}
        </div>
        <p className="text-lg py-4">Sercurity Rating</p>
        {securityFields.map(item => {
          return (
            <div key={item.title}>
              <label htmlFor="category" className="pb-2">
                {item.title}
              </label>
              <select name={item.name} className="select-option">
                {["Available", "Not Available"].map(e =>
                  <option key={e} selected={e === item.value} value={e}>
                    {e}
                  </option>
                )}
              </select>
            </div>
          );
        })}
        <p className="text-lg py-4">Structural Compliance matrics</p>
        {compFields.map((item, i) => {
          return <AppInput key={item.name} {...item} onErrorChange={hasError => {
                setErrors(prev =>
                  prev.map(
                    (error, index) =>
                      index === i + orgFields.length ? hasError : error
                  )
                );
              }}/>;
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

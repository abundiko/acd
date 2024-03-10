"use client";

import AppInput, { AppInputProps } from "@/components/ui/AppInput";
import FormButton from "@/components/ui/FormButton";
import Link from "next/link";
import { z } from "zod";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col gap-2 p-3 md:p-4 max-w-[500px] mx-auto rounded md:border w-full mt-4  bg-light shadow">
      <h1 className="r-text-xl r-font-bold">Add New Company Data</h1>
      <form className="flex flex-col gap-3 py-3">
        {orgFields.map((item) => {
          return <AppInput key={item.name} {...item} />;
        })}
        <div>
          <label htmlFor="location" className="pb-2">
            Location
          </label>
          <select className="select-option">
            <option value="">Vanuatu</option>
            <option value="">Spain</option>
            <option value="">Niger</option>
            <option value="">French Guiana</option>
            <option value="">France</option>
          </select>
        </div>
        <div>
          <label htmlFor="compscore" className="pb-2">
            compliance Score
          </label>
          <select className="select-option">
            <option value=""></option>
            <option value="">option2</option>
            <option value="">option3</option>
            <option value="">option4</option>
            <option value="">option5</option>
          </select>
        </div>
        <div>
          <label htmlFor="category" className="pb-2">
            categories
          </label>
          <select className="select-option">
            <option value=""></option>
            <option value="">option2</option>
            <option value="">option3</option>
            <option value="">option4</option>
            <option value="">option5</option>
          </select>
        </div>
        <p className="text-lg py-4">Sercurity Rating</p>
        {securityFields.map((item) => {
          return (
            <div key={item.title}>
              <label htmlFor="category" className="pb-2">
                {item.title}
              </label>
              <select className="select-option">
                {["Available", "Not Available"].map((e) => (
                  <option value={e}>{e}</option>
                ))}
              </select>
            </div>
          );
        })}
        <p className="text-lg py-4">Structural Compliance matrics</p>
        {compFields.map((item) => {
          return <AppInput key={item.name} {...item} />;
        })}
        <FormButton className="btn-primary">Submit</FormButton>
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
  },
  {
    name: "quota",
    title: " 5% Employment Quota",
    type: "number",
    placeholder: "enployment quota",
    schema: z.string().min(1, "role is required"),
  },
  {
    name: "rating",
    title: "Accessibility rating",
    type: "number",
    placeholder: "accessibility rating",
    schema: z.string().min(1, "this field is required"),
  },
  {
    name: "srating",
    title: "Total sercurity rating",
    type: "number",
    placeholder: "Total sercurity rating",
    schema: z.string().min(1, "this field is required"),
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
    name: "building",
    title: "Access to building (%score)",
    type: "number",
    placeholder: "access to building",
    schema: z.string().min(1, "this field is required"),
  },
  {
    name: "entrance",
    title: "Entrance, Reception, waiting area (%score)",
    type: "number",
    placeholder: "Entrance, Reception, waiting area (%score)",
    schema: z.string().min(1, "this filed is required"),
  },
  {
    name: "room",
    title: "Rooms/Halls/offices",
    type: "number",
    placeholder: "Rooms/Halls/offices",
    schema: z.string().min(1, "this field is required"),
  },
  {
    name: "paths",
    title: "circulation paths/Internal way-finding",
    type: "number",
    placeholder: "circulation paths/Internal way-finding",
    schema: z.string().min(1, "this field is required"),
  },
  {
    name: "gtoilet",
    title: "general toilet",
    type: "number",
    placeholder: "general toilet",
    schema: z.string().min(1, "this field is required"),
  },
  {
    name: "atoilet",
    title: "Accessible toilet",
    type: "number",
    placeholder: "Accessible toilet",
    schema: z.string().min(1, "this field is required"),
  },
  {
    name: "lifts",
    title: "Lifts/stair lifts",
    type: "number",
    placeholder: "Lifts/stair lifts",
    schema: z.string().min(1, "this field is required"),
  },
];

"use client";

import AppInput, { AppInputProps } from "@/components/ui/AppInput";
import FormButton from "@/components/ui/FormButton";
import { z } from "zod";
import React from "react";
import { OrgCardProps } from "../OrgCard";

export type Availaboolean = "Avalable" | "Not Available";

export type Organization = OrgCardProps & {
  quota: string;
  rating: string;
  srating: string;
  building: string;
  entrance: string;
  room: string;
  paths: string;
  gtoilet: string;
  atoilet: string;
  lifts: string;
  compscore: string;
  spost: Availaboolean;
  camera: Availaboolean;
  point: Availaboolean;
  emergency: Availaboolean;
};

export default function Page({
  name,
  quota,
  location,
  category,
  compscore,
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
}: Organization) {
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
  ];

  const securityFields: {
    name: string;
    title: string;
    value: Availaboolean;
  }[] = [
    {
      name: "spost",
      title: "Presence of sercurity post",
      value: spost,
    },
    {
      name: "camera",
      title: "presence of surveillance Camera",
      value: camera,
    },
    {
      name: "point",
      title: "Muster Point",
      value: point,
    },
    {
      name: "emergency",
      title: "Emergency Exit",
      value: emergency,
    },
  ];

  const compFields: AppInputProps[] = [
    {
      name: "building",
      title: "Access to building (%score)",
      type: "number",
      value: building,
      placeholder: "access to building",
      schema: z.string().min(1, "this field is required"),
    },
    {
      name: "entrance",
      title: "Entrance, Reception, waiting area (%score)",
      type: "number",
      value: entrance,
      placeholder: "Entrance, Reception, waiting area (%score)",
      schema: z.string().min(1, "this filed is required"),
    },
    {
      name: "room",
      title: "Rooms/Halls/offices",
      type: "number",
      value: room,
      placeholder: "Rooms/Halls/offices",
      schema: z.string().min(1, "this field is required"),
    },
    {
      name: "paths",
      title: "circulation paths/Internal way-finding",
      type: "number",
      value: paths,
      placeholder: "circulation paths/Internal way-finding",
      schema: z.string().min(1, "this field is required"),
    },
    {
      name: "gtoilet",
      title: "general toilet",
      type: "number",
      value: gtoilet,
      placeholder: "general toilet",
      schema: z.string().min(1, "this field is required"),
    },
    {
      name: "atoilet",
      title: "Accessible toilet",
      type: "number",
      value: atoilet,
      placeholder: "Accessible toilet",
      schema: z.string().min(1, "this field is required"),
    },
    {
      name: "lifts",
      title: "Lifts/stair lifts",
      type: "number",
      value: lifts,
      placeholder: "Lifts/stair lifts",
      schema: z.string().min(1, "this field is required"),
    },
  ];

  return (
    <div className="flex flex-col gap-2 p-3 md:p-4 max-w-[500px] mx-auto rounded md:border w-full mt-4">
      <h1 className="r-text-xl r-font-bold">Edit Company Data</h1>
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
                  <option selected={e === item.value} value={e}>
                    {e}
                  </option>
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

import { fetchOneTestimonial } from "@/serverActions/fetchOneTestimonial";
import Form from "./Form";
import { notFound } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams: { id?: string };
}) {
  if (!searchParams.id) notFound();

  const res = await fetchOneTestimonial(searchParams.id);
  if (res === 404) notFound();
  if (!res) return;
  return <Form {...res.data} />;
}

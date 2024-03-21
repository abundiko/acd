import { fetchTestimonials } from "@/serverActions/fetchTestimonials";
import Main from "./Main";
export default async function Page() {
  const testimonials = await fetchTestimonials();
  if (!testimonials) return;
  return <Main testimonials={testimonials!} />;
}

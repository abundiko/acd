import { FormState } from "@/hooks/useFormSubmit";

export default function FormMessage({loading, errorMessage, successMessage}:FormState) {
  if(!loading)
return <>
{
  errorMessage &&
  <p className="p-2 text-[rgb(185,28,28)] bg-red-100 border-red-500 border rounded">{errorMessage}</p>
}
{
  successMessage &&
  <p className="p-2 text-[rgb(21,128,61)!important] bg-green-100 border-green-500 border rounded">{successMessage}</p>
}
</>;
}
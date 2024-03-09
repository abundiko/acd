import { useState } from "react";
import { formDataToObject } from "../functions/test";

const useFormSubmit = <T>({
  url,
  onComplete,
  hasFile = false,
  headers
}: {
  url: string;
  onComplete: (data: T) => void;
  hasFile?: boolean | string;
  headers?: { [key: string]: string };
}) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    const formData = new FormData(e.target as HTMLFormElement);

    try {
      // console.log(formDataToObject(formData));
      let _hasFile: boolean = !!hasFile;
      if (typeof hasFile == "string") _hasFile = formData.get(hasFile) != null;
      const response = await fetch(url, {
        method: "POST",
        body: _hasFile ? formData : JSON.stringify(formDataToObject(formData)),
        headers: _hasFile
          ? { ...headers }
          : {
              "Content-Type": "application/json",
              ...headers
            }
      });

      const data = await response.json();

      onComplete(data);

      // console.log(data, 10);
    } catch (error) {
      setErrorMessage("An error occurred");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { onSubmit, loading, errorMessage, setErrorMessage, setLoading };
};

export default useFormSubmit;

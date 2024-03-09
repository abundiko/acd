import { useState } from "react";
import { formDataToObject } from "../utils/functions/test";

export type FormState = {
  loading: boolean;
  errorMessage: string;
  successMessage: string;
};

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
  const [key, setKey] = useState("");
  const [formState, setFormState] = useState({
    loading: false,
    errorMessage: "",
    successMessage: ""
  });

  function setErrorMessage(msg: string) {
    setFormState(prev => ({ ...prev, errorMessage: msg }));
  }
  function reset() {
    setKey(prev => prev + "1");
  }
  function setSuccessMessage(msg: string) {
    setFormState(prev => ({ ...prev, successMessage: msg }));
  }
  function setLoading(loading: boolean) {
    setFormState(prev => ({ ...prev, loading }));
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      console.log(formDataToObject(formData));
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

      console.log(data, 10);
    } catch (error) {
      setErrorMessage("An error occurred");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const formProps = { key, onSubmit };
  return {
    formProps,
    formState,
    setErrorMessage,
    setSuccessMessage,
    setLoading,
    reset
  };
};

export default useFormSubmit;

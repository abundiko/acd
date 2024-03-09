type FormDataObject = Record<string, string | Blob>;

export const formDataToObject = (formData: FormData): FormDataObject => {
  const object: FormDataObject = {};

  formData.forEach((value, key) => {
    // Convert File or Blob values to their respective URLs
    object[key] = value instanceof Blob ? URL.createObjectURL(value) : value;
  });

  return object;
};

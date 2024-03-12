import { memo, useEffect, useRef, useState } from "react";
import { z } from "zod";

export type AppInputProps = {
  icon?: React.ReactNode;
  placeholder: string;
  value?: string;
  name: string;
  type?: string;
  schema?: z.ZodString;
  textarea?: boolean;
  ps?: string;
  title?: string;
  required?: boolean;
  onChange?: (value: string) => void;
  onErrorChange?: (hasError: boolean) => void;
};

export default memo(function AppInput({
  icon,
  placeholder,
  value = "",
  name,
  type = "text",
  onChange,
  textarea = false,
  onErrorChange,
  schema,
  ps,
  title,
  required
}: AppInputProps) {
  const [val, setVal] = useState(value);
  const [error, setError] = useState<string | null>(null);
  const hasUpdated = useRef(false);

  useEffect(
    () => {
      if (schema)
        try {
          schema.parse(val);
          setError(null);
          if (onErrorChange) {
            onErrorChange(false);
          }
        } catch (e) {
          setError(JSON.parse(e as any)[0].message);
          if (onErrorChange) onErrorChange(true);
          // alert((e as any).message[0].message);
          // if (e instanceof z.ZodError && error == null && onErrorChange) {
          // }
        }
      else if (onErrorChange && !hasUpdated.current) {
        onErrorChange(false);
        hasUpdated.current = true;
      }
    },
    [val]
  );

  return (
    <div className="">
      {title &&
        <label htmlFor={`${title}-input`} className="inline-block pb-1">
          {title}
        </label>}
      <div className="relative">
        <span
          className={`absolute inline-block left-3 opacity-60 ${textarea
            ? "top-4"
            : "top-1/2 -translate-y-1/2"}`}
        >
          {icon}
        </span>
        {textarea
          ? <textarea
              required={required}
              id={`${title}-input`}
              name={name}
              placeholder={placeholder}
              rows={4}
              value={val}
              onChange={e => {
                setVal(e.target.value);
                if (onChange) onChange(e.target.value);
              }}
              className={` bg-light w-full border outline-primary text-dark-text py-3 ${!icon
                ? "ps-4"
                : "ps-9"} pe-4 rounded-md ${error ? "bg-red-100" : ""}`}
            />
          : <input
              required={required}
              id={`${title}-input`}
              name={name}
              placeholder={placeholder}
              type={type}
              value={val}
              onChange={e => {
                setVal(e.target.value);
                if (onChange) onChange(e.target.value);
              }}
              className={` bg-light w-full border outline-primary text-dark-text py-3 ${ps
                ? ps
                : !icon ? "ps-4" : "ps-9"} pe-4 rounded-md ${error
                ? "bg-red-100"
                : ""}`}
            />}
      </div>
      {error &&
        <p className="text-red-900 text-xs p-[0px_!important] w-[auto_!important]">
          {error}
        </p>}
    </div>
  );
});

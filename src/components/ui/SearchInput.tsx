import { useDebounce } from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
import { Search } from "react-huge-icons/outline";

export type SearchInputProps = {
  placeholder?: string;
  onSearch: (v: string) => void;
};

export default function SearchInput({
  placeholder = "Search...",
  onSearch
}: SearchInputProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(inputValue, 1000); // Adjust delay as needed
  useEffect(
    () => {
      onSearch(debouncedValue);
    },
    [debouncedValue]
  );

  return (
    <div className="relative md:grid w-full max-w-[300px]">
      <input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        type="text"
        placeholder={placeholder}
        className="border border-gray-300 rounded-3xl py-2 px-6 w-full text-sm"
      />
      <Search className="absolute top-3 right-5" />
    </div>
  );
}

import { Search } from "lucide-react";
import { useState } from "react";

type SearchBarProps = {
  placeholder?: string;
  onSearch?: (value: string) => void;
};

export function SearchBar({
  placeholder = "Search...",
  onSearch,
}: SearchBarProps) {
  const [value, setValue] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setValue(e.target.value);
    onSearch?.(e.target.value);
  }

  return (
    <div className="relative">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="
          w-full
          rounded-lg
          border
          border-slate-300
          bg-white
          py-2
          pl-10
          pr-4
          text-sm
          outline-none
          transition
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-200
        "
      />
    </div>
  );
}
'use client'
import { Select, Theme } from "@radix-ui/themes";

export type SelectOption= {
  value: string;
  label:string;
} | string;

export type AppSelectProps = {
  value?: string | null;
  name: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  title?: string;
  items?: SelectOption[];
  className?: string;
};

export default function AppSelect({
  value,
  onChange,
  placeholder,
  title,
  items,
  name,
  className
}: AppSelectProps) {
  return (
    <Theme>
      <div className={className}>
        <Select.Root size="2" onValueChange={onChange} defaultValue={value??undefined} name={name}>
      <Select.Trigger
        className="w-full"
        variant="ghost"
        placeholder={placeholder}
      />
      <Select.Content position="popper">
          <Select.Label>
            {title}
          </Select.Label>
          {items &&
            items.map((option) =>{
              let value = typeof option === 'string' ? option : option.value;
              let label = typeof option === 'string' ? option : option.label;
              return <Select.Item
                className="whitespace-nowrap"
                value={value}
                key={value}
              >
                {label}
              </Select.Item>
            })}
      </Select.Content>
    </Select.Root>
      </div>
    </Theme>
  );
}

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
      <div className={className}>
    <Theme>
        <Select.Root disabled={!items || items.length === 0} size="2" onValueChange={onChange} defaultValue={value??undefined} name={name}>
      <Select.Trigger
      className="px-1 overflow-x-hidden max-w-full line-clamp-1"
        variant="ghost"
        placeholder={placeholder}
      >
        <h1
        className={"w-full py-1.5"}>{placeholder ?? title}</h1>
      </Select.Trigger>
      <Select.Content position="popper">
                <Select.Group>
                  
          <Select.Label>
            {title}
          </Select.Label>
          {items && items?.length > 0 ?
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
            }) : <></>
            }
                    </Select.Group>
      </Select.Content>
    </Select.Root>
    </Theme>
      </div>
  );
}

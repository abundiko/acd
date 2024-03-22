"use client";

import { ApiCategoryData, ApiOrganizationData } from "@/utils/types/companyTypes";
import { Theme, DropdownMenu } from "@radix-ui/themes";
import { useEffect, useState } from "react";

export type CategorySelectProps = {
  categories: ApiCategoryData[];
  onChange: (value: string, id:string) => void;
  lastOrgCategory: string;
  value: string;
  className?: string;
}
export default function CategorySelect({onChange,className, categories, lastOrgCategory, value:val}:CategorySelectProps) {
  const [label, setLabel] = useState<string>('');
  const [value, setValue] = useState<string>(val);

  useEffect(()=>{
    setLabel(lastOrgCategory)
  }, [lastOrgCategory])

  function handleChange(e:string, id:string){
      setLabel(e);
      onChange(e,id);
      setValue(id);
  }
  
  return (
    <div className={className ?? "select-option cursor-pointer"}>
      <input type="hidden" name="category" value={label} hidden />
      <input type="hidden" name="categoryid" value={value} hidden />
      <Theme>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <div tabIndex={0}>
              {label ? label : "Select Organization"}
            </div>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="app-popup">
            {
              categories?.map(({_id, title, subcategories}) => {
                return (subcategories.length === 0) 
                ? <DropdownMenu.Item className={`dropdown-child disabled `} key={_id}>{title}</DropdownMenu.Item> 
                : <DropdownMenu.Sub key={_id}>
              <DropdownMenu.SubTrigger className={`dropdown-child ${subcategories.map(_=>_.name).includes(label) ? 'bg-primary text-light' : ''}`}>{title}</DropdownMenu.SubTrigger>
              <DropdownMenu.SubContent 
              className={`app-popup `}>
                {
                  subcategories?.map((sub) => 
                  <DropdownMenu.Item className={`dropdown-child ${sub.name === label ? 'bg-primary text-light opacity-70' : ''}`} 
                  key={sub._id} 
                  onClick={() => handleChange(sub.name, sub._id)}>
                    {sub.name}
                    </DropdownMenu.Item>)
                }
              </DropdownMenu.SubContent>
            </DropdownMenu.Sub>
              })
            }
           
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Theme>
    </div>
  );
}

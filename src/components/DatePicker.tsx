'use client'

import { useState } from "react";
import { Calendar as CalendarIcon } from "react-huge-icons/outline";
import "@radix-ui/themes/styles.css";
import { Theme, Popover } from "@radix-ui/themes";
import { formatDate, isBefore } from "@/utils/functions/functions";

import { Calendar } from "@natscale/react-calendar";
import "@natscale/react-calendar/dist/main.css";


export default function DatePicker({value, onValueChange}:{value:string|null, onValueChange: (e:string)=>void}) {
  const [title, setTitle] = useState<string>(value??'')

    const takenDates = [
    "Mon Mar 18 2024 00:00:00 GMT+0100 (West Africa Standard Time)",
    "Tue Mar 19 2024 00:00:00 GMT+0100 (West Africa Standard Time)",
    "Wed Mar 20 2024 00:00:00 GMT+0100 (West Africa Standard Time)"
  ];
  
  return <>
  <input type="hidden" name="date" value={title} hidden />
   <Theme>
            <Popover.Root >
              <Popover.Trigger>
  <div className="w-full flex rounded-md py-3 gap-3 bg-light border outline-primary text-dark-text px-4">
    <CalendarIcon className="opacity-50" />
    <span className={title ? 'opacity-80' : 'opacity-50 text-xs'}>{title == '' ? 'Select Date' : formatDate(title)}</span>
  </div>
              </Popover.Trigger>
              <Popover.Content className="max-w-[240px]" style={{ width: 240, maxWidth: 240 }}>
                <Calendar
        onChange={(v)=>{
          setTitle(v.toString());
          onValueChange(v.toString());
        }}
        value={new Date(title)}
        size={200}
        isDisabled={date => {
          return (
            takenDates.includes(date.toString()) ||
            isBefore(date, new Date()) ||
            date.toString().includes("Sun") ||
            date.toString().includes("Sat")
          );
        }}
        startOfWeek={0}
        hideAdjacentDates
      />
              </Popover.Content>
            </Popover.Root>
    </Theme>
  </>;
}

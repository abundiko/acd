'use client'

import { CSSProperties, useState } from "react";
import { Calendar as CalendarIcon } from "react-huge-icons/outline";
import "@radix-ui/themes/styles.css";
import { Theme, Popover } from "@radix-ui/themes";
import { formatDate, isBefore } from "@/utils/functions/functions";

import { Calendar } from "@natscale/react-calendar";
import "@natscale/react-calendar/dist/main.css";
import { useIndexPageState } from "@/state/indexStore";
import useWindowWidth from "@/hooks/useWindowWidth";


export default function DatePicker({value, onValueChange}:{value:string|null, onValueChange: (e:string)=>void}) {
  const [title, setTitle] = useState<string>(value??'')
  const evaluationDates = useIndexPageState(s => s.evaluationDates);
  const vw = useWindowWidth();
  const size = vw < 600 ? 280 : vw < 768 ? 310 : vw < 1280 ? 350 : 400;

    const takenDates = evaluationDates.map(_=>_.bookDate);
  
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
              <Popover.Content
               side="top"
               avoidCollisions={false}
               style={{ width: size, height: size, maxWidth: size, maxHeight: size, "--radix-popper-anchor-width":size } as CSSProperties}>
                <Calendar
                
        onChange={(v)=>{
          setTitle(v.toString());
          onValueChange(v.toString());
        }}
        value={new Date(title)}
        size={size - 32}
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

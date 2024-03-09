"use client";

import "@radix-ui/themes/styles.css";

import { useNavState } from "@/state/navStore";
import { MenuLineHorizontal } from "react-huge-icons/solid";
import { Theme, Popover } from "@radix-ui/themes";
import { useWindowWidth } from "@/hooks/useWindowWidth";

export default function Topbar() {
  const setOpen = useNavState(state => state.setOpen);

  return (
    <form className="flex gap-4 items-center p-3 border-b bg-light relative">
      <div className="relative w-full md:w-3/12">
        <button
          type="button"
          onClick={e => {
            e.preventDefault();
            setOpen(true);
          }}
          className="p-2 text-xl lg:hidden"
        >
          <MenuLineHorizontal className="absolute top-1/2 left-2 -translate-y-1/2" />
        </button>
      </div>
      <div className=" md:w-8/12">
        <SelectModal />
      </div>
      <button className="md:w-3/12 bg-primary text-nowrap px-4 text-light font-semibold rounded-md py-2 hover:bg-primary-dark">
        Check Accessibility
      </button>
    </form>
  );
}

function SelectModal() {
  const windowWidth = useWindowWidth();

  return (
    <Theme>
      {windowWidth >= 768
        ? <div className="max-md:hidden w-full border rounded-md flex items-stretch text-dark-text h-full overflow-hidden divide-x-2 ">
            <select name="" id="" className="topbar-select">
              <option value="">Federal Government</option>
            </select>
            <select name="" id="" className="topbar-select">
              <option value="">Abuja</option>
            </select>
            <select name="" id="" className="topbar-select">
              <option value="">Aso Rock Presidetial Villa</option>
            </select>
          </div>
        : <div className="md:hidden">
            <Popover.Root>
              <Popover.Trigger>
                <button className="bg-blue-100 border-primary text-primary rounded-md border px-5 py-2">
                  Filters
                </button>
              </Popover.Trigger>
              <Popover.Content style={{ width: 280 }}>
                <div>
                  <div className="w-full border rounded-md flex flex-col items-stretch text-dark-text h-full overflow-hidden divide-y-2 ">
                    <select name="" id="" className="topbar-select">
                      <option value="">Federal Government</option>
                    </select>
                    <select name="" id="" className="topbar-select">
                      <option value="">Abuja</option>
                    </select>
                    <select name="" id="" className="topbar-select">
                      <option value="">Aso Rock Presidetial Villa</option>
                    </select>
                  </div>
                </div>
              </Popover.Content>
            </Popover.Root>
          </div>}
    </Theme>
  );
}

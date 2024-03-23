import { useDashboardState } from "@/state/dashboardStore";
import {  Popover } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");

  const orgs = useDashboardState(s => s.organizations);
  const router = useRouter()

  const filteredList = orgs
    .filter(({ name }) => {
      return name.toLowerCase().includes(searchValue.toLowerCase());
    });
    
return <>
  <Popover.Root >
    <Popover.Trigger>
      <button className="w-full h-full flex px-2 items-center justify-start">
        <span className="opacity-50">Search</span>
      </button>
    </Popover.Trigger>
    <Popover.Content side="bottom" sideOffset={-30} avoidCollisions={false} style={{
      padding: 0,
      width: 300,
      maxWidth: "95vw"
    }}>
      <div className="p-2">
      <input type="search" autoFocus placeholder="Search.." className="w-full px-2 py-1.5 border focus:border-none rounded-md outline-primary"
              onChange={e => setSearchValue(e.target.value)} />
      </div>
      <div className="flex flex-col overflow-y-auto max-h-[50vh]">
        {filteredList.length == 0
          ? <p className="p-2 rounded">No Results Found</p>
          : filteredList.map(({ name, _id }) => {
              return (
                <Popover.Close
                  key={_id}
                >
                  <Link href={`/dashboard/${_id}`}
                  className="p-2 hover:bg-gray-200 border-t">
                  {name}
                  </Link>
                </Popover.Close>
              );
            })}
      </div>
    </Popover.Content>
  </Popover.Root>
</>;
}
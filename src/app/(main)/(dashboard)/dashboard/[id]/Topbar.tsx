"use client";

import "@radix-ui/themes/styles.css";

import { useNavState } from "@/state/navStore";
import { MenuLineHorizontal } from "react-huge-icons/solid";
import { Theme, Popover } from "@radix-ui/themes";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { NIGERIAN_STATES } from "@/utils/constants";
import { useDashboardState } from "@/state/dashboardStore";
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Topbar() {
  const setOpen = useNavState(state => state.setOpen);
  const router = useRouter();
  const org = useDashboardState(s => s.org);

  function checkAccessibility(e:any){
    e.preventDefault();
    const formdata = new FormData(e.target);
    if(!formdata.get('org')) return;
    router.push(`/dashboard/${formdata.get('org')}`);
  }

  return (
    <form onSubmit={checkAccessibility} className="flex gap-4 items-center p-3 border-b bg-light relative">
      <div className="relative w-full md:w-2/12">
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
      <div className=" md:w-9/12">
        {org && <SelectModal />}
      </div>
      <button className="md:w-3/12 bg-primary text-nowrap px-4 text-light font-semibold rounded-md py-2 hover:bg-primary-dark">
        Check Accessibility
      </button>
    </form>
  );
}

function SelectModal() {
  const windowWidth = useWindowWidth();
  const categories = useDashboardState(s => s.categories);
  const organizations = useDashboardState(s => s.organizations);
  const org = useDashboardState(s => s.org);

  const [cat, setCat] = useState(org.category);
  const [loc, setLoc] = useState(org.location);

  useLayoutEffect(()=>{
    setCat(org.category);
    setLoc(org.location);
  }, [org])


      function hendleCategoryChange(e:React.ChangeEvent<HTMLSelectElement>){
      setCat(e.target.value);
    }
    function hendleLocationChange(e:React.ChangeEvent<HTMLSelectElement>){
      setLoc(e.target.value);
    }

    const availableOrgs = organizations.filter(_=>_.category === cat && _.location === loc);
  function SelectFields(){


    return ( <><select
    onChange={hendleCategoryChange}
     name="category" id="category" className="topbar-select" defaultValue={cat}>
                        {categories.map(({ title: e }) =>
                          <option
                            key={e}
                            value={e}
                          >
                            {e}
                          </option>
                        )}
                      </select>
                      <select onChange={hendleLocationChange} defaultValue={loc} name="location" id="location" className="topbar-select">
                        {NIGERIAN_STATES.map(e =>
                          <option
                            key={e}
                            value={e}
                          >
                            {e}
                          </option>
                        )}
                      </select>
                      <select name="org" id="org" className="topbar-select">
                        {
                          availableOrgs.length == 0 ? <option disabled selected>not available</option> :
                        availableOrgs.map(({name:e, _id}) =>
                          <option
                            key={e}
                            value={_id}
                          >
                            {e}
                          </option>
                        )}
                      </select></>);
  }

  if (org && organizations && categories) return <Theme>
         <div className="max-md:hidden w-full border rounded-md flex items-stretch text-dark-text h-full overflow-hidden divide-x-2 ">
              <SelectFields />
            </div>  <div className="md:hidden">
              <Popover.Root>
                <Popover.Trigger>
                  <button className="bg-blue-100 border-primary text-primary rounded-md border px-5 py-2">
                    Filters
                  </button>
                </Popover.Trigger>
                <Popover.Content style={{ width: 280 }}>
                  <div>
                    <div className="w-full border rounded-md flex flex-col items-stretch text-dark-text h-full overflow-hidden divide-y-2 ">
                     <SelectFields />
                    </div>
                  </div>
                </Popover.Content>
              </Popover.Root>
            </div>
      </Theme>;
}

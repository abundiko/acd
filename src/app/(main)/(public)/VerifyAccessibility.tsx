"use client";

import "@radix-ui/themes/styles.css";

import { Theme, Popover } from "@radix-ui/themes";
import { NIGERIAN_STATES } from "@/utils/constants";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useIndexPageState } from "@/state/indexStore";
import { formDataToObject } from "@/utils/functions/test";
import AppSelect from "@/components/ui/AppSelect";

export default function VerifyAccessibility() {
  const router = useRouter();
   const categories = useIndexPageState(s => s.categories);
  const organizations = useIndexPageState(s => s.organizations);

  function checkAccessibility(e:any){
    e.preventDefault();
    const formdata = new FormData(e.target);
    console.log(formDataToObject(formdata));
    
    if(!formdata.get('org')) return;
    router.push(`/dashboard/${formdata.get('org')}`);
  }

  if (organizations && categories && organizations.length > 0)
  return (
    <form onSubmit={checkAccessibility} className="flex flex-col gap-2 p-3 border-b relative items-start">
      <h6 className="font-semibold text-sm opacity-70 max-xl:hidden">Verify Accessibility</h6>
      <div className="flex gap-4 w-full">
        <div className=" xl:w-9/12">
      <SelectModal />
      </div>
      <button className="max-xl:hidden xl:w-3/12 bg-primary text-nowrap px-4 text-light font-semibold rounded-md py-2 hover:bg-primary-dark">
        Verify
      </button>
      </div>
    </form>
  );
}

function SelectModal() {
  const categories = useIndexPageState(s => s.categories);
  const organizations = useIndexPageState(s => s.organizations);
  const [cat, setCat] = useState(organizations[0].category);
  const [loc, setLoc] = useState(organizations[0].location);
  const [_id, setId] = useState(organizations[0]._id);
  const router = useRouter();

   function checkAccessibility(){
    if(!_id) return;
    router.push(`/dashboard/${_id}`);
  }

      function hendleCategoryChange(e:React.ChangeEvent<HTMLSelectElement>){
      setCat(e.target.value);
    }
    function hendleLocationChange(value:string){
      setLoc(value);
    }
    function hendleOrgChange(e:React.ChangeEvent<HTMLSelectElement>){
      setId(e.target.value);
    }

    const availableOrgs = organizations.filter(_=>_.category === cat && _.location === loc);

  useEffect(()=>{
    if(availableOrgs.length < 1) {
      setId('');
      return;
    }
    setId(availableOrgs[0]._id)
  }, [availableOrgs])

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
                      <AppSelect className="topbar-select" value={loc}  name="location" items={NIGERIAN_STATES} onChange={hendleLocationChange} />
                      {/* <select onChange={hendleLocationChange} defaultValue={loc} id="location" className="topbar-select">
                        {NIGERIAN_STATES.map(e =>
                          <option
                            key={e}
                            value={e}
                          >
                            {e}
                          </option>
                        )}
                      </select> */}
                      <select onChange={hendleOrgChange} name="org" id="org" className="topbar-select">
                        {
                          availableOrgs.length == 0 ? <option disabled>not available</option> :
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

return <Theme>
         <div className="max-xl:hidden w-full border rounded-md flex items-stretch text-dark-text h-full overflow-hidden divide-x-2 ">
              <SelectFields />
            </div>  
            <div className="xl:hidden">
              <Popover.Root>
                <Popover.Trigger>
                  <button className="bg-blue-100 border-primary text-primary rounded-md border px-5 py-2">
                    Verify Accessibility
                  </button>
                </Popover.Trigger>
                <Popover.Content style={{ width: 280 }}>
                  <div className="flex flex-col gap-2">
                    <div className="w-full border rounded-md flex flex-col items-stretch text-dark-text h-full overflow-hidden divide-y-2 ">
                     <SelectFields />
                    </div>
                    <input onClick={checkAccessibility} className="xl:hidden w-full bg-primary text-nowrap px-4 text-light font-semibold rounded-md py-2 hover:bg-primary-dark" value="Verify" type="submit"/>
        
                  </div>
                </Popover.Content>
              </Popover.Root>
            </div>
      </Theme>;
}

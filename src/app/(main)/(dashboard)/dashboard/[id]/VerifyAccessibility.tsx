"use client";

import "@radix-ui/themes/styles.css";

import { Theme, Popover, Select } from "@radix-ui/themes";
import { NIGERIAN_STATES } from "@/utils/constants";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDashboardState } from "@/state/dashboardStore";
import { formDataToObject } from "@/utils/functions/test";
import AppSelect from "@/components/ui/AppSelect";
import CategorySelect from "@/components/OrgSelect";
import FormButton from "@/components/ui/FormButton";

export default function VerifyAccessibility() {
  const router = useRouter();
  const categories = useDashboardState((s) => s.categories);
  const organizations = useDashboardState((s) => s.organizations);

  function checkAccessibility(e: any) {
    e.preventDefault();
    const formdata = new FormData(e.target);
    // console.log(formDataToObject(formdata));

    if (!formdata.get("org")) return;
    router.push(`/dashboard/${formdata.get("org")}`);
  }

  if (organizations && categories && organizations.length > 0)
    return (
      <form
        onSubmit={checkAccessibility}
        className="flex flex-col gap-2 p-3 relative items-start"
      >
        <div className="flex gap-4 w-full">
          <div className=" md:w-9/12">
            <SelectModal />
          </div>
          <button className="max-md:hidden md:w-3/12 bg-primary text-nowrap px-4 text-light font-semibold rounded-md py-2 hover:bg-primary-dark">
            Verify
          </button>
        </div>
      </form>
    );
}

function SelectModal() {
  const categories = useDashboardState((s) => s.categories);
  const organizations = useDashboardState((s) => s.organizations);
  const org = useDashboardState((s) => s.org);
  const [cat, setCat] = useState(organizations[0].category);
  const [loc, setLoc] = useState(organizations[0].location);
  const [_id, setId] = useState(organizations[0]._id);
  const router = useRouter();

  useEffect(()=>{
    if(!org) return;
    setId(org._id)
    setCat(org.category);
    setLoc(org.location);
  }, [org])

  function checkAccessibility() {
    if (!_id) return;
    router.push(`/dashboard/${_id}`);
  }

  function hendleCategoryChange(e: string, id:string) {
    setCat(e);
  }
  function hendleLocationChange(value: string) {
    setLoc(value);
  }
  function hendleOrgChange(value:string) {
    setId(value);
  }

   const [availableOrgs, setAvailableOrgs] = useState(organizations.filter(
    (_) => _.category === cat && _.location === loc
  ));

  useEffect(() => {
    setAvailableOrgs(organizations.filter(
      (_) => _.category === cat && _.location === loc
    ));
  }, [cat, loc, organizations]);

  useEffect(() => {
    if (availableOrgs.length < 1) {
      setId("");
      return;
    }
    setId(availableOrgs[0]._id);
  }, [availableOrgs]);

  useEffect(() => {
    if (availableOrgs.length < 1) {
      setId("");
      return;
    }
    setId(availableOrgs[0]._id);
  }, [availableOrgs]);

  function SelectFields() {
    return (
      <>
        <CategorySelect categories={categories} 
        lastOrgCategory={cat} 
        value={_id} 
         onChange={hendleCategoryChange}
         className="topbar-select"
          />
        
        <AppSelect
          className="topbar-select md:max-w-[30%]"
          value={loc}
          name="location"
          title="Locaton:"
          items={NIGERIAN_STATES}
          onChange={hendleLocationChange}
        />
        <AppSelect
          className="topbar-select"
          value={_id}
          name="org"
          title="Organisation:"
          items={availableOrgs.map(_=>({value:_._id,label:_?.name}))}
          onChange={hendleOrgChange}
        />
      </>
    );
  }

  return (
    <Theme>
      <div className="max-md:hidden w-full border rounded-md flex items-center bg-light  text-dark-text h-full overflow-hidden divide-x-2 ">
        <SelectFields />
      </div>
      <div className="md:hidden">
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
              <FormButton
                onClick={checkAccessibility}
                disabled={!_id}
                className="md:hidden w-full bg-primary text-nowrap px-4 text-light font-semibold rounded-md py-2 hover:bg-primary-dark"
              >Verify</FormButton>
            </div>
          </Popover.Content>
        </Popover.Root>
      </div>
    </Theme>
  );
}

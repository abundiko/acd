"use client";

import RoundedCard from "@/components/ui/RoundedCard";
import { useIndexPageState } from "@/state/indexStore";
import { ApiOrganizationData } from "@/utils/types/companyTypes";
import { Theme, Dialog } from "@radix-ui/themes";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Remove } from "react-huge-icons/solid";

export default function VerifyModal() {
  const params = useSearchParams();
  const org = params.get("org");
  const [organization, setOrganization] = useState<ApiOrganizationData | null>(
    null
  );
  const orgs = useIndexPageState(s => s.organizations);
  const router = useRouter();

  useEffect(
    () => {
      if (!org || !orgs) setOrganization(null);
      const available = orgs.find(o => o._id === org);
      if (available) setOrganization(available);
    },
    [org, orgs]
  );

  return (
    <Theme>
      <Dialog.Root open={organization != null}>
        <Dialog.Trigger />

        <Dialog.Content
          style={{ maxWidth: "clamp(280px,80vw,650px)", zIndex: 99999, backgroundColor: "#fdfdfd" }}
        >
          <div className="p-4 relative flex flex-col gap-2">
            <Dialog.Close>
              <button onClick={()=>{
                // check if its possible to go backwards
                const canGoBack = typeof window !== "undefined" && window.history.state?.back === true;
                setOrganization(null);
                 router.back();
              }}  className="absolute top-3 -right-3 bg-primary p-1 rounded text-light">
                <Remove />
              </button>
            </Dialog.Close>
            <div className="flex max-md:flex-col items-start md:items-center justify-between gap-2">
              <h1 className="font-[500]">COMPLIANCE SUMMARY</h1>
              <div className="flex flex-col items-start md:items-end">
                <h1 className="text-primary text-sm font-semibold m-0 p-0">
                  ORGANISATION
                </h1>
                <p className="m-0 p-0">
                  {organization?.name}
                </p>
              </div>
            </div>
            <div className="md:flex grid max-md:grid-cols-2 gap-3 sm:gap-4 md:gap-2 lg:gap-4">
              {tiles({
                compliance: organization ? Number(organization.compScore) : 0,
                employment: organization ? Number(organization.quota) : 0,
                accessibility: organization ? Number(organization.rating) : 0,
                security: organization ? Number(organization.srating) : 0
              }).map(tile => <RoundedCard key={tile.title} {...tile} />)}
            </div>
            <Link href={`/dashboard/${organization?._id}`} className="btn-primary w-full py-2">
            Go to Dashboard
            </Link>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </Theme>
  );
}

const tiles = ({
  compliance,
  employment,
  accessibility,
  security
}: {
  compliance: number;
  employment: number;
  accessibility: number;
  security: number;
}) => [
  {
    title: "COMPLIANCE SCORE",
    value: compliance,
    color: "#E53761"
  },
  {
    title: "5% EMPLOYMENT QUOTA",
    value: employment,
    color: "#27A468"
  },
  {
    title: "ACCESSIBILITY",
    value: accessibility,
    color: "#F2A735"
  },
  {
    title: "SECURITY",
    value: security,
    color: "#F2A7dd"
  }
];

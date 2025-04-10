"use client";

import useRunOnce from "@/hooks/useRunOnce";
import { useDashboardState } from "@/state/dashboardStore";
import {
  ApiEvaluationData,
  ApiOrganizationData,
  ApiCategoryData,
} from "@/utils/types/companyTypes";
import Others from "./Others";
import RoundedBars from "./RoundedBars";
import SecurityRating from "./SecurityRating";
import StructuralComplianceMetrics from "./StructuralComplianceMetrics";
type PageProps = {
  evaluationDates: ApiEvaluationData[];
  org: ApiOrganizationData;
  categories: ApiCategoryData[];
  organizations: ApiOrganizationData[];
};
export default function Dashboard({
  evaluationDates,
  organizations,
  categories,
  org,
}: PageProps) {
  const {
    setEvaluationDates,
    setOrg,
    setCategories,
    setOrganizations,
    org: organization,
  } = useDashboardState();

  useRunOnce(() => {
    setEvaluationDates(evaluationDates);
    setOrganizations(organizations);
    setCategories(categories);
    setOrg(org);
  });

  if (organization)
    return (
      <section className=" bg-light-gray p-4">
        <h1 className="w-full font-semibold text-xl md:text-2xl pb-4">
          {org.name}
        </h1>
        <div className="flex max-md:flex-wrap gap-3 sm:gap-4 md:gap-2 lg:gap-4">
          <div className="flex flex-col gap-4 lg:w-[55%] w-full">
            <RoundedBars />
            <StructuralComplianceMetrics />
            <div className="dashboard-card flex flex-col gap-3">
              <h3 className="font-semiblod text-sm">
                Inclusive Statement{" "}
                {organization.policy ? (
                  <span className="inline-flex px-3 py-1 text-xs font-medium text-green-600 bg-green-100 rounded-xl">
                    AVAILABLE
                  </span>
                ) : (
                  <span className="inline-flex px-3 py-1 text-xs font-medium text-red-600 bg-red-100 rounded-xl">
                    NOT AVAILABLE
                  </span>
                )}
              </h3>
              <p className="mt-2 text-gray-800 md:text-lg">
                {organization.policy
                  ? organization.policy
                  : "No Inclusive Statement"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:w-[45%] w-full">
            <SecurityRating />
            <Others />
          </div>
        </div>
      </section>
    );
}

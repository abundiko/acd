import {
  ApiEvaluationData,
  ApiCategoryData,
  ApiOrganizationData,
  ApiStoryData,
  ApiTeamData,
  ApiLogoData
} from "@/utils/types/companyTypes";
import { create } from "zustand";

type DashboardState = {
  evaluationDates: ApiEvaluationData[];
  setEvaluationDates: (v: ApiEvaluationData[]) => void;
  org: ApiOrganizationData;
  setOrg: (v: ApiOrganizationData) => void;
  categories: ApiCategoryData[];
  setCategories: (v: ApiCategoryData[]) => void;
  organizations: ApiOrganizationData[];
  setOrganizations: (v: ApiOrganizationData[]) => void;
};

export const useDashboardState = create<DashboardState>(set => ({
  evaluationDates: [],
  setEvaluationDates: (evaluationDates: ApiEvaluationData[]) => {
    set(state => ({ ...state, evaluationDates }));
  },
  org: (null as unknown) as ApiOrganizationData,
  setOrg: (org: ApiOrganizationData) => {
    set(state => ({ ...state, org }));
  },
  categories: [],
  setCategories: (categories: ApiCategoryData[]) => {
    set(state => ({ ...state, categories }));
  },
  organizations: [],
  setOrganizations: (organizations: ApiOrganizationData[]) => {
    set(state => ({ ...state, organizations }));
  }
}));

import {
  ApiEvaluationData,
  ApiCategoryData,
  ApiOrganizationData,
  ApiTestimonialData,
  ApiTeamData,
  ApiLogoData
} from "@/utils/types/companyTypes";
import { create } from "zustand";

type IndexPageState = {
  evaluationDates: ApiEvaluationData[];
  setEvaluationDates: (v: ApiEvaluationData[]) => void;
  team: ApiTeamData[];
  setTeam: (v: ApiTeamData[]) => void;
  categories: ApiCategoryData[];
  setCategories: (v: ApiCategoryData[]) => void;
  organizations: ApiOrganizationData[];
  setOrganizations: (v: ApiOrganizationData[]) => void;
  testimonials: ApiTestimonialData[];
  setTestimonials: (v: ApiTestimonialData[]) => void;
  logos: ApiLogoData[];
  setLogos: (v: ApiLogoData[]) => void;
};

export const useIndexPageState = create<IndexPageState>(set => ({
  evaluationDates: [],
  setEvaluationDates: (evaluationDates: ApiEvaluationData[]) => {
    set(state => ({ ...state, evaluationDates }));
  },
  team: [],
  setTeam: (team: ApiTeamData[]) => {
    set(state => ({ ...state, team }));
  },
  categories: [],
  setCategories: (categories: ApiCategoryData[]) => {
    set(state => ({ ...state, categories }));
  },
  organizations: [],
  setOrganizations: (organizations: ApiOrganizationData[]) => {
    set(state => ({ ...state, organizations }));
  },
  testimonials: [],
  setTestimonials: (testimonials: ApiTestimonialData[]) => {
    set(state => ({ ...state, testimonials }));
  },
  logos: [],
  setLogos: (logos: ApiLogoData[]) => {
    set(state => ({ ...state, logos }));
  }
}));

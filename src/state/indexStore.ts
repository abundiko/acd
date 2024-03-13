import {
  ApiEvaluationData,
  ApiCategoryData,
  ApiOrganizationData,
  ApiStoryData,
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
  stories: ApiStoryData[];
  setStories: (v: ApiStoryData[]) => void;
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
  stories: [],
  setStories: (stories: ApiStoryData[]) => {
    set(state => ({ ...state, stories }));
  },
  logos: [],
  setLogos: (logos: ApiLogoData[]) => {
    set(state => ({ ...state, logos }));
  }
}));

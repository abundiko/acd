import { ApiFormMessage } from "./basicTypes";

export type ApiAdminUser = { email: string; _id: string };

export type ApiSignupData = ApiFormMessage & {
  data: ApiAdminUser;
  token: string;
};

export type ApiEvaluationData = {
  email: string;
  phone: string;
  address: string;
  bookDate: string;
  _id: string;
};

export type ApiSubCategory = {
  name: string;
  _id: string;
  categoryid: string;
};

export type ApiCategoryData = {
  title: string;
  _id: string;
  subcategories: ApiSubCategory[];
};
export type ApiCountData = {
  date: string;
  count: string;
  _id: string;
};
export type ApiLogoData = {
  img: string;
  _id: string;
};

export type ApiTeamData = {
  _id: string;
  img: string;
  name: string;
  role: string;
  facebook: string;
  instagram: string;
  twitter: string;
  comment: string;
};
export type ApiTestimonialData = {
  _id: string;
  img: string;
  fullname: string;
  label: string;
  message: string;
  facebook: string;
  instagram: string;
  twitter: string;
};

export interface ApiStoryData {
  _id: string;
  header: string;
  link: string;
}

export interface ApiNewsletterData {
  _id: string;
  email: string;
}

export type Availaboolean = "Avalable" | "Not Available";
export type ApiOrganizationData = {
  _id: string;
  name: string;
  location: string;
  category: string;
  compScore: string;
  quota: string;
  rating: string;
  spost: Availaboolean;
  camera: Availaboolean;
  point: Availaboolean;
  emergency: Availaboolean;
  srating: string;
  external: string;
  goods: string;
  fixtures: string;
  amenities: string;
  numberOfEmployees?: string;
  employessWithDisability?: string;
  policy?:string;
};

export type ApiDashboardOrganizationData = {
  stats: ApiOrganizationData;
  similar: ApiOrganizationData[];
};

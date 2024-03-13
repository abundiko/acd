export type ApiEvaluationData = {
  email: string;
  phone: string;
  address: string;
  bookDate: string;
  _id: string;
};

export type ApiCategoryData = {
  title: string;
  _id: string;
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
  building: string;
  entrance: string;
  room: string;
  paths: string;
  gtoilet: string;
  atoilet: string;
  lifts: string;
};

export type ApiDashboardOrganizationData = {
  stats: ApiOrganizationData;
  similar: ApiOrganizationData[];
};

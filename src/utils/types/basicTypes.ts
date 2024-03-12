export type AppLayoutProps = Readonly<{ children: React.ReactNode }>;

export type ApiFormMessage = {
  message: string;
};

export type ApiCompressedData = {
  data: {
    type: string;
    data: number[];
  };
};

export type ApiActionResponse<T> = T | null;
export type ApiActionResponseWith404<T> = ApiActionResponse<T> | 404;

export type ApiDataResponse<T> = { data: T };

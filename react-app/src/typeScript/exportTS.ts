export type state = {
  data: null | any[];
  articleData: null | articleObj;
  loading: boolean;
  error: null | string;
};

export type results = {
  results: any[];
};

export type articleObj = {
  id: number;
  image_url: string;
  title: string;
  url: string;
  published_at: string;
  summary: string;
  news_site: string;
};

export const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

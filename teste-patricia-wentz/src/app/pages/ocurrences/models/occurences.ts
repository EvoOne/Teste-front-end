export interface Occurences {
  address: string;
  data: string;
  id: string;
  image: string;
  title: string;
  user: string;
  status: string;
}

export type OccurencesResponse = {
  getAllOccurences: Occurences[];
};

export type Query = {
  listOccurences: Occurences[];
};

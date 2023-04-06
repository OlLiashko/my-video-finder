export interface IBaseSelectElement {
  title: string;
  id?: string;
}
export enum OrderBy {
  date,
  rating,
  relevance,
  title,
  videoCount,
  viewCount
}

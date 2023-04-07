export interface IBaseSelectElement {
  title: string;
  id?: string;
}
export enum OrderBy {
  date = 'Date',
  rating = 'Rating',
  relevance = 'Relevance(by default)',
  title = 'Title',
  videoCount = 'Video count',
  viewCount = 'View count'
}

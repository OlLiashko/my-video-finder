export interface IYoutubeResponse<T> {
  items: T[];
}

export interface IYouTubeCategoriesFull {
  id: string;
  kind: string;
  snippet: { title: string};
  title?: string;
}

export interface IYouTubeVideoMain {
  id: IVideoId;
}

export interface IVideoId {
  videoId: string;
}

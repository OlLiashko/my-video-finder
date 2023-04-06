import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {
  IVideoId,
  IYouTubeCategoriesFull,
  IYoutubeResponse,
  IYouTubeVideoMain
} from "../interfaces/youtube-api.interface";
import {createHttpParams} from "../shared/functions";
import {IBaseSelectElement} from "../interfaces/shared.interface";

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {

  url: string = 'https://www.googleapis.com/youtube/v3/';
  apiKey : string = 'AIzaSyDGaL-OFAUp7iS9ESGFum_FnBBeToxRWhQ';

  constructor(private http: HttpClient) { }

  getYouTubeVideoCategories(): Observable<IBaseSelectElement[]> {
    const part = 'snippet',
          regionCode = 'US',
          key = this.apiKey;

    const params = createHttpParams({
      key, part, regionCode
    });

    return this.http.get<IYoutubeResponse<IYouTubeCategoriesFull>>(`${this.url}videoCategories`, {params})
      .pipe(
        map((data: IYoutubeResponse<IYouTubeCategoriesFull>) => data.items),
        map((data: IYouTubeCategoriesFull[]) => this.simplifyCategoriesList(data)),
        catchError(err => throwError(err))
      );
  }

  getVideosForChanel({search, category, sortOrder, maxResults = 12}: {search: string, maxResults?: number, category?: string, sortOrder?: string}): Observable<IVideoId[]> {
    // bottom will be adaptation for youtube api requirements
    debugger
    const q = search,
          videoCategoryId = category ? category : '',
          order = sortOrder ? sortOrder : '',
          part = 'snippet',
          type = 'video, id',
          key = this.apiKey;

    const params = createHttpParams({
      key, q, videoCategoryId, part, type, maxResults, order
    });

    return this.http.get<IYoutubeResponse<IYouTubeVideoMain>>(`${this.url}search`, {params})
      .pipe(
        map((data: IYoutubeResponse<IYouTubeVideoMain>) => data.items),
        map((data) => this.prepareVideoForFrame(data)),
        catchError(err => throwError(err))
      )
  }

  private simplifyCategoriesList(items: IYouTubeCategoriesFull[]): IBaseSelectElement[] {
    return items.map((elem: IYouTubeCategoriesFull) => {
      return {id: elem.id, title: elem.snippet.title};
    })
  }

  private prepareVideoForFrame(items: IYouTubeVideoMain[]): IVideoId[] {
    return items.map((video: IYouTubeVideoMain) => {
      const videoId: string = `https://www.youtube.com/embed/${video.id.videoId}`
      return {videoId}
    })
  }
}

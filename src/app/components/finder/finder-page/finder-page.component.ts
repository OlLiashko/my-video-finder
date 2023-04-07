import {Component, OnInit} from '@angular/core';
import {YoutubeApiService} from "../../../services/youtube-api.service";
import {filter, Observable} from "rxjs";
import {IBaseSelectElement, OrderBy} from "../../../interfaces/shared.interface";
import {IVideoId} from "../../../interfaces/youtube-api.interface";

@Component({
  selector: 'app-finder-page',
  templateUrl: './finder-page.component.html',
  styleUrls: ['./finder-page.component.scss']
})
export class FinderPageComponent implements OnInit {

  public orderedParams: IBaseSelectElement[] = [];
  public categories$: Observable<IBaseSelectElement[]>;
  public videoIds$: Observable<IVideoId[]>;
  public searchParams: string;

  private sortOrder: string | null;
  private category: string | null;

  constructor(private youtube: YoutubeApiService) {
  }

  ngOnInit(): void {
    this.categories$ = this.youtube.getYouTubeVideoCategories();
    this.getOrderParams();
  }

  getSearchParam(value: string): void {
    this.searchParams = value;
  }

  getVideoList() {
    const params = this.buildQueryParams();
    this.videoIds$ = this.youtube.getVideosForChanel(params)
      .pipe(
        filter(Boolean)
      )
  }

  setVideoCategory(category: IBaseSelectElement) {
    this.category = category.id ? category.id : null;
    this.getVideoList();
  }

  setSortOrder(category: IBaseSelectElement) {
    this.sortOrder = category.id ? category.id : null;
    this.getVideoList();
  }

  private buildQueryParams(): {search: string, category?: string, sortOrder?: string} {
    let params: {search: string, category?: string, sortOrder?: string} = {search: this.searchParams};

    if (this.category) {
      params = {
        ...params,
        category: this.category
      }
    }

    if (this.sortOrder) {
      params = {
        ...params,
        sortOrder: this.sortOrder
      }
    }

    return params;
  }

  private getOrderParams(): void {
    for (let item in OrderBy) {
      if (isNaN(Number(item))) {
        this.orderedParams = [...this.orderedParams, {id: item, title: OrderBy[item]}];
      }
    }
  }
}

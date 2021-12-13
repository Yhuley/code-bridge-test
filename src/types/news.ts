import { NewsActionTypes } from "../reducers/news/news.actions"

export interface NewsState {
    news: any[];
    isFetching: boolean;
    error: null | string;
}
export interface INews {
    id: number;
    title: string;
    imageUrl: string;
    summary: string;
    publishedAt: string;
}

export interface FetchNewsStartAction {
    type: NewsActionTypes.FETCH_NEWS_START;
}

export interface FetchNewsSuccessAction {
    type: NewsActionTypes.FETCH_NEWS_SUCCESS;
    payload: any[];
}

export interface FetchNewsErrorAction {
    type: NewsActionTypes.FETCH_NEWS_ERROR;
    payload: string;
}

export type NewsAction = FetchNewsStartAction | FetchNewsSuccessAction | FetchNewsErrorAction
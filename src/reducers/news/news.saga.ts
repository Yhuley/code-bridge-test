import { put, takeLatest, call, all } from "redux-saga/effects";
import axios from "axios";

import { NewsActionTypes, fetchNewsSuccess, fetchNewsError } from "./news.actions";
import { INews } from "../../types/news";

const getNews = () => axios.get<INews[]>('https://api.spaceflightnewsapi.net/v3/articles?_limit=100')

function* fetchNewsAsync() {
    try {
        const { data } = yield call(getNews)
        yield put(fetchNewsSuccess(data))
    } catch (error: any) {
        yield put(fetchNewsError(error.message))      
    }
}

function* fetchNewsStart() {
    yield takeLatest(NewsActionTypes.FETCH_NEWS_START, fetchNewsAsync)
}

export function* newsSaga() {
    yield all([
        call(fetchNewsStart)
    ])
}
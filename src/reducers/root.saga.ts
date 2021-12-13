import { all, call } from "redux-saga/effects";
import { newsSaga } from "./news/news.saga";
import { articleSaga } from "./article/article.saga";

export default function* rootSaga() {
    yield all([
        call(newsSaga),
        call(articleSaga)
    ])
}
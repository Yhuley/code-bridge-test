import { all, call } from "redux-saga/effects";
import { newsSaga } from "./news/news.saga";

export default function* rootSaga() {
    yield all([
        call(newsSaga)
    ])
}
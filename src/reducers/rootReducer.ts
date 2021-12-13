import { combineReducers } from "redux";
import newsReducer from "./news/news.reducer";
import articleReducer from "./article/article.reducer";

export const rootReducer = combineReducers({ newsReducer, articleReducer });

export type rootState = ReturnType<typeof rootReducer>;
import { combineReducers } from "redux";
import newsReducer from "./news/news.reducer";

export const rootReducer = combineReducers({ newsReducer });

export type rootState = ReturnType<typeof rootReducer>;
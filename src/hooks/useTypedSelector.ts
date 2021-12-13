import { TypedUseSelectorHook, useSelector } from "react-redux";
import { rootState } from "../reducers/rootReducer";

export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector
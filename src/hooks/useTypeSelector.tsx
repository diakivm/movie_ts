import {TypedUseSelectorHook, useSelector} from "react-redux";
import {rootState} from "../store/rootReducers";

export const useTypeSelector: TypedUseSelectorHook<rootState> = useSelector
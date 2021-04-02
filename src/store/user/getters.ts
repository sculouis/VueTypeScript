import { GetterTree } from "vuex";
import { RootState } from "../types";
import { UserState } from "./type";

export const getters:GetterTree<UserState,RootState> = {
    getInfo(state):string{
        return `${state.userName} - ${state.email}`;

    }
}
import { GetterTree } from "vuex";
import { RootState } from "../types";
import { UserState } from "./type";

//取得使用者相關資料
export const getters:GetterTree<UserState,RootState> = {
    getInfo(state):string{
        return `${state.userName} - ${state.email}`;

    }
}
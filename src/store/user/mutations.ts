import { MutationTree } from "vuex";
import { UserState } from "./type";

/*
 設定使用者名稱
*/
export enum UserMutations{
    SET_USERNAME = "SET_USERNAME"
}

//TODO 定義mutation
export const mutations:MutationTree<UserState> = {
    [UserMutations.SET_USERNAME](state,payLoad){
        state.userName = payLoad;
    }
}
import { MutationTree } from "vuex";
import { UserState } from "./type";

export enum UserMutations{
    SET_USERNAME = "SET_USERNAME"
}

export const mutations:MutationTree<UserState> = {
    [UserMutations.SET_USERNAME](state,payLoad){
        state.userName = payLoad;
    }
}
import { Module } from "vuex";
import { RootState } from "../types";
import { UserState } from "./type";
import {getters} from "./getters";
import {mutations} from "./mutations"
import {actions} from "./actions";

const state:UserState ={
    userName:"陳測試",
    email:"test@mail.com",
    lastLogin:new Date()
}
export const user:Module<UserState,RootState> = {
    state,
    getters,
    mutations,
    actions
}
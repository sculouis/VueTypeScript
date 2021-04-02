import { ActionTree } from "vuex";
import { RootState } from "../types";
import { UserState } from "./type";

export const actions:ActionTree<UserState,RootState> ={

    async fetchMessageLog():Promise<any> {
        const response = await fetch(
          "https://linebothook.herokuapp.com/messagelog"
        );
        const messageslog = await response.json();
        console.log(messageslog);
      }
}
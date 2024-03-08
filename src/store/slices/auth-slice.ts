import { Usertype } from "@/types/user";
import { StateCreator } from "zustand";


export interface AuthSlice {
     userInfo : undefined | Usertype,
     setUserInfo : (userInfo : Usertype) => void;    
}

export const createAuthSlice : StateCreator<AuthSlice> = () => ({
    userInfo : undefined,
    setUserInfo : (userInfo : Usertype) => ({userInfo})
})
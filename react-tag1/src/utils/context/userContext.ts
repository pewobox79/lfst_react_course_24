import {createContext} from "react";
import React from "react";

export const UserContext = createContext<{
    userState: boolean,
    setUserState: React.Dispatch<React.SetStateAction<{ userState: boolean }>>
}>({
    userState: false, setUserState: () => {
    }
})
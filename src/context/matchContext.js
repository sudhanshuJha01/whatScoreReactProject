import { createContext , useContext } from "react";

export const matchContext = createContext({
    seriesData:null,
    currMatchInfo:null,
    setCurrMatchInfo:()=>{}

})

export const MatchContextProvider = matchContext.Provider;

export function useMatch(){
    return useContext(matchContext)
}
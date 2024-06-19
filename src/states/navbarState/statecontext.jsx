import react, {useReducer, createContext} from "react";
import {reducer, initialState} from "./reducer";

export const StateContext = createContext(initialState);

export const StateProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, StateContext);

    return (
        <StateContext.Provider value={{state, dispatch}}>
            {children}
        </StateContext.Provider>
    )
}
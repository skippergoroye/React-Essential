"use client"

import React, { useReducer } from 'react'


type IState = {
   theme: string,
   fontSize: number,
}


type IAction = {
    type: "CHANGE_THEME" | "CHANGE_FONTSIZE",
    payload: number,
}


const initialState = {
    theme: "dark",
    fontSize: 16,
}



const reducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case "CHANGE_THEME":
            return {
                ...state,
                theme: state.theme === "dark" ? "light" : "dark"
            }
        case "CHANGE_FONTSIZE":
            return {
                ...state,
                theme: action.payload,
            }
        default:
            return state;
    }
}


export default function UsereducerContext() {
    const [state, dispatch] = useReducer(reducer, initialState)

    
  return (
    <div>UsereducerContext</div>
  )
}

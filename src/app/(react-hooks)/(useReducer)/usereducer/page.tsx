"use client"

import React, { useState, useReducer} from 'react'

const initialState = {
  count: 0
};


type State = {
  count: number,
}


type Action = { type: "INCREMENT" } | {type: "DECREMENT"} | {type: "RESET"}



const reducer = (state: State, action: Action) => {
  switch(action.type) {
    case 'INCREMENT': 
      return {count: state.count + 1}
    case "DECREMENT":
      return { count: state.count - 1}
    case "RESET": 
       return { count: 0}
    default: 
      throw new Error
  }
}




export default function Counter () {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='grid place-content-center py-8 bg-green-500 gap-2'>
     Count: {state.count}
     <button className='bg-red-600' onClick={() => dispatch({type: "DECREMENT"})}>-</button>
     <button className='bg-blue-600' onClick={() => dispatch({type: "INCREMENT"})}>+</button>
     <button className='bg-purple-600' onClick={() => dispatch({type: "RESET"})}>Reset</button>
    </div>
  )
}

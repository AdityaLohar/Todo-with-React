import React, { useReducer, useState } from "react";
import "./style.css";

const reducer = (state, action) => {
    if(action.type === "incr") {
        state = state + 1;
    }
    else if(state > 0) {
        state = state - 1;
    }

    return state;
}

const UseReducer = () => {
  const initialNum = 7;

  const [state, dispatch] = useReducer(reducer, initialNum);

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div
          class="button2"
          onClick={ () => {
            dispatch({type: "incr"})
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2"
          onClick={() => {
            dispatch({type: "decr"})
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseReducer;

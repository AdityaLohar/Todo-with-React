import React, { useEffect, useState } from "react";
import "./style.css";

const UseEffect = () => {
  const initialNum = 7;
  const [num, setNum] = useState(initialNum);

  useEffect(() => {
    document.title = `Chats(${num})`;
  });

  return (
    <>
      <div className="center_div">
        <p>{num}</p>
        <div
          class="button2"
          onClick={() => {
            setNum(num + 1);
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
            if (num !== 0) {
              setNum(num - 1);
            }
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

export default UseEffect;

import React, { useState } from "react";
import Draggable from "react-draggable";
import "./Tab.css";

const Tab = (props) => {
  const [position, setPosition] = useState(0);

  const trackPos = (data) => {
    setPosition(data.x);
  };

  return (
    <Draggable axis="x" onDrag={(e, data) => trackPos(data)}>
      <div
        className="tabContainer"
        style={{ width: `${props.tabWidth}%` }}
        tabIndex={props.id}
      >
        <div>{props.name}</div>
        {props.displayCross && (
          <div className="remove">
            <div className="cross" onClick={props.removeTab}>
              x
            </div>
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default Tab;

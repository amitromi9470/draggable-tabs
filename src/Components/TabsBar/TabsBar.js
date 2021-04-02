import React, { useState } from "react";
import { initialData } from "../../Data";
import Tab from "../Tab/Tab";
import "./TabsBar.css";

const TabsBar = () => {
  const [count, setCount] = useState(3);
  const [tabsArray, setTabsArray] = useState(initialData);
  const [tabWidth, setTabWidth] = useState(parseInt(100 / count));
  const [id, setId] = useState(3);
  const [maxReached, setMaxReached] = useState(false);

  const addTab = () => {
    const newTab = {
      id: id + 1,
      name: `Tab${count + 1}`,
    };
    setTabsArray([...tabsArray, newTab]);
    setTabWidth(100 / (count + 1));
    setCount(count + 1);
    setId(id + 1);
    setMaxReached(count===9)
  };

  const removeTab = (id) => {
    const newTabArray = tabsArray.filter((item) => item.id !== id);
    if (count <= 10) {
      setMaxReached(false);
    }
    setTabsArray(newTabArray);
    setTabWidth(100 / (count - 1));
    setCount(count - 1);
  };

  return (
    <div className="tabBarContainer">
      {tabsArray.map((item, index) => {
        if (index > 9) {
          return null;
        }
        return (
          <Tab
            id={item.id}
            name={item.name}
            tabWidth={tabWidth}
            removeTab={() => removeTab(item.id)}
            displayCross={count > 3}
          />
        );
      })}
      <div></div>
      {!maxReached && (
        <div className="add" onClick={addTab}>
          +
        </div>
      )}
    </div>
  );
};

export default TabsBar;

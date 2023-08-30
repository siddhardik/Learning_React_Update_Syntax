import { useState } from "react";
import ChildComponent from "./ChildComponent";
import { colorContext } from "../context";

const ParentComponent = (props) => {
  const [color, setColor] = useState("#000000");

  return (
    <>
      <h1>Pick a color</h1>
      <input
        type="color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
        value={color}
      />
      <colorContext.Provider value={{ color, setColor }}>
        {/* value can be string , object, number  */}
        <ChildComponent />
      </colorContext.Provider>
      {/* //You can use only for this component also => ChildComponent */}
    </>
  );
};

export default ParentComponent;

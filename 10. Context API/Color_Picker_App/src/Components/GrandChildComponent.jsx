import { useContext } from "react";
import { colorContext } from "../context";

const GrandChildComponent = (props) => {
  const color = useContext(colorContext);
  return (

    <p style={{ color: color }}>Color: {color}</p>
  )
}

  ;

export default GrandChildComponent;

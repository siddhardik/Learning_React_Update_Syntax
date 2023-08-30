import { useContext } from "react";
import { colorContext } from "../context";

const GrandChildComponent = (props) => {
  // const color= useContext(colorContext);
  const colorContextValue = useContext(colorContext);
  return (
    // <p style={{ color:color }}>Color: {color}</p>

    // <p style={{ color: colorContextValue.color }}>Color: {colorContextValue.color}</p>
    <colorContext.Consumer>
      {() =>
        <p style={{ color: colorContextValue.color }}>Color: {colorContextValue.color}</p>
      }
    </colorContext.Consumer>
  )
}

  ;

export default GrandChildComponent;

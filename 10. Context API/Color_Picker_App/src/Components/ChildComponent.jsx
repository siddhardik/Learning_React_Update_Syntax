import GrandChildComponent from "./GrandChildComponent";

const ChildComponent = (props) => (
  <div
    style={{
      border: `10px solid #f0f`,
      margin: "15px",
      padding: "10px"
    }}
  >
    <GrandChildComponent color={props.color} />
  </div>
);

export default ChildComponent;

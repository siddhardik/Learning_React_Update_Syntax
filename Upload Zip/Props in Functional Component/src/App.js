import "./styles.css";

export const Card = (props) => (
  <div className="card">
    <h3>Name: {props.name}</h3>
    <span>About: {props.about}</span>
  </div>
);

export default function App() {
  return <Card name="Pranav" about="Hi,my name is Pranav Yeole" />;
}

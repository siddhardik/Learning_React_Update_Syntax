import itemcss from "./item.module.css";

export default function Item({ item }) {
  return (
    <div className={itemcss.container}>
      <h3 className={itemcss.title}>{item.title}</h3>
      <img src={item.image} alt={item.title} className={itemcss.image} />
      <p>
        <strong className={itemcss.price}>${item.price}</strong>
      </p>
      <p>{item.description}</p>
    </div>
  );
}

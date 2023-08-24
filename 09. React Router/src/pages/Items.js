import { Link } from "react-router-dom";

function Items() {
  return (
    <>
      <main>
        <h1>Items Page</h1>

        <ul>
          <Link to="/root/items/item-1">
            <li>Item-1</li>
          </Link>

          <Link to="/root/items/item-2">
            <li>Item-2</li>
          </Link>

          <Link to="/root/items/item-3">
            <li>Item-3</li>
          </Link>

        </ul>

        <Link to="/">Back</Link>
      </main>
    </>
  );
}

export default Items;

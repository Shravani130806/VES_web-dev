import React, { useEffect, useState } from "react";
import Item from "./Item";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=5")
      .then((response) => response.json())
      .then((data) => setItems(data.posts));
  }, []);

  return (
    <div className="container">
      <h2>Item List</h2>

      {items.map((item) => (
        <Item key={item.id} title={item.title} body={item.body} />
      ))}

    </div>
  );
}

export default App;
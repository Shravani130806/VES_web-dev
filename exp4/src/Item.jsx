import React, { useState } from "react";

function Item({ title, body }) {
  const [show, setShow] = useState(false);

  return (
    <div className="item">
      <h4>{title}</h4>

      <button onClick={() => setShow(!show)}>
        Toggle Details
      </button>

      {show && <p>{body}</p>}
    </div>
  );
}

export default Item;
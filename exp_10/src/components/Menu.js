import React from 'react';

function Menu() {
  const items = [
    { name: "Chocolate Cake", price: "₹500" },
    { name: "Cupcakes", price: "₹200" },
    { name: "Cookies", price: "₹150" },
    { name: "Brownies", price: "₹250" }
  ];

  return (
    <section>
      <h2>Our Menu</h2>
      {items.map((item, index) => (
        <div key={index}>
          <h4>{item.name}</h4>
          <p>{item.price}</p>
        </div>
      ))}
    </section>
  );
}

export default Menu;
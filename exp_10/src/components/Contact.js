import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    alert("Thank you " + name + "!");
  };

  return (
    <section>
      <h2>Contact Us</h2>
      <input 
        type="text"
        placeholder="Your Name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </section>
  );
}

export default Contact;
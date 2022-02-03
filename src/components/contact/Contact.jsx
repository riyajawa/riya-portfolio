import { useState } from "react";

import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h1>Contact.</h1>
        <p className="hire__text white">I am available for service. Connect with me via phone:</p>
         <p className="hire__text white"><strong>8570956447</strong> or email <strong>riyajawa2@gmail.com</strong></p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
      
   
    </div>
    
   
    
  );
}

import React from "react";

const Contact = () => {
  return (
    <section id="contact" data-aos="fade-up">
      <h2 className="section-title">Contact Me</h2>
      <div className="panel contact">
        <form onSubmit={(e)=>{e.preventDefault(); alert("Demo: message sent");}}>
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <textarea placeholder="Message" rows={5} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

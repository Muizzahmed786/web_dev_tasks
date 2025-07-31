function ContactForm() {
  return (
    <>
        <div className="form-container">
            <div className="form-box">
                <h1>Contact Us</h1>
                <form className="form">
                    <label htmlFor="name">Name</label><br />
                    <input type="text" id="name" placeholder="Enter your name" />
                    <br />
                    <label htmlFor="email">Email</label><br />
                    <input type="email" id="email" placeholder="Enter your email" />
                    <br />
                    <label htmlFor="message">Message</label><br />
                    <textarea id="message" placeholder="Enter your message" rows="4"></textarea>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </>
  );
}

export default ContactForm;

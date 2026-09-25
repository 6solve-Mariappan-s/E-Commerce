import PropTypes from "prop-types";

function Contact({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    if (onSubmit) {
      onSubmit(contactData);
    }

    alert("Message sent successfully!");
    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Contact Us</h2>
          <p className="text-muted">
            Have a question? We'd love to hear from you.
          </p>
        </div>

        <div className="row g-4">

          {/* Contact Information */}
          <div className="col-lg-5">
            <div className="contact-info">
              <h4>Get In Touch</h4>

              <div className="contact-item">
                <i className="bi bi-geo-alt-fill"></i>
                <div>
                  <h6>Address</h6>
                  <p>123 Main Street, Chennai, Tamil Nadu</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="bi bi-telephone-fill"></i>
                <div>
                  <h6>Phone</h6>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="bi bi-envelope-fill"></i>
                <div>
                  <h6>Email</h6>
                  <p>support@example.com</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="bi bi-clock-fill"></i>
                <div>
                  <h6>Working Hours</h6>
                  <p>Monday - Saturday: 9 AM - 6 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form">
              <h4>Send Us a Message</h4>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Enter subject"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  <i className="bi bi-send me-2"></i>
                  Send Message
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

Contact.propTypes = {
  onSubmit: PropTypes.func,
};

export default Contact;
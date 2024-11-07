import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
    number: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "First name is required";
    if (!formData.lastname) newErrors.lastname = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.number) newErrors.number = "Phone number is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", formData);
      toast.success("Thank you for your message!");
      setFormData({
        name: "",
        lastname: "",
        email: "",
        number: "",
        message: "",
      });
      const checkbox = e.target.querySelector('input[type="checkbox"]');
      if (checkbox) {
        checkbox.checked = false; // Reset checkbox
      }
      setErrors({}); // Clear errors
    }
  };
  return (
    <div id="contact">
      <div className="contact-text">
        <h5 className="touch">Get In Touch</h5>
        <div className="contact-me">
          <h3>Contact me</h3>

          <p>
            Let’s collaborate! Send me a message, and let’s make something great
            together.{" "}
          </p>
        </div>
      </div>

      <ToastContainer />
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div className="d-flex info">
            <div className="details">
              <label htmlFor="">First name</label>
              <input
                type="text"
                onChange={handleChange}
                name="name"
                value={formData.name}
              />

              {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </div>

            <div className="details">
              <label htmlFor="">Last name</label>
              <input
                type="text"
                onChange={handleChange}
                name="lastname"
                value={formData.lastname}
              />
              {errors.lastname && (
                <p style={{ color: "red" }}>{errors.lastname}</p>
              )}
            </div>
          </div>

          <div className="d-flex info">
            <div className="details">
              <label htmlFor="">Email</label>
              <input
                type="email"
                onChange={handleChange}
                name="email"
                value={formData.email}
              />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>

            <div className="details">
              <label htmlFor="">Phone number</label>
              <input
                type="number"
                onChange={handleChange}
                name="number"
                value={formData.number}
              />
              {errors.number && <p style={{ color: "red" }}>{errors.number}</p>}
            </div>
          </div>

          <div className="message">
            <label htmlFor="">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              id=""
              placeholder="Type your message..."
            ></textarea>
            {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
          </div>

          <div className="check">
            <input type="checkbox" />
            <label htmlFor="">I accept the terms</label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

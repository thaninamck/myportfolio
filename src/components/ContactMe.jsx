import React, { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // 👉 Ici tu pourras ajouter EmailJS, Formspree ou ton API backend
    // Exemple EmailJS: emailjs.send(serviceID, templateID, formData, userID)
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b ">
      <h2 className="text-3xl font-bold text-gray-600 mb-6">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className=" backdrop-blur-lg text-start shadow-xl rounded-2xl p-8 w-full max-w-lg space-y-6"
      >
        {/* Name */}
        <div>
          <label className="block text-gray-600  font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white/20 text-gray-600 placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-600 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white/20 text-gray-600 placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-600 font-medium mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-3 rounded-lg bg-white/20 text-gray-600 placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Write your message..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-gray-600 font-semibold py-3 rounded-xl transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactMe;

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const [state, handleSubmit] = useForm("mqaagvoz");
  const navigate = useNavigate();

  if (state.succeeded) {
    // Show success message and redirect after 3 seconds
    setTimeout(() => {
      navigate("/"); // Redirect to the home page
    }, 3000);

    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="text-center p-8 bg-gray-800 rounded-md shadow-lg mt-16"> 
          {/* mt-16 adds space below the fixed navbar */}
          <h2 className="text-2xl font-bold text-green-400">
            Thank you! Your message has been sent.
          </h2>
          <p className="text-gray-300 mt-2">We will get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-800 p-8 rounded-md shadow-lg mt-16"
      >
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
          Contact Me
        </h2>

        {/* Email Field */}
        <label htmlFor="email" className="text-gray-300 font-semibold">
          Email Address:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full p-3 rounded-md bg-gray-700 text-gray-200 mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          placeholder="Your email address"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 mb-4"
        />

        {/* Message Field */}
        <label htmlFor="message" className="text-gray-300 font-semibold">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="w-full p-3 rounded-md bg-gray-700 text-gray-200 mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          placeholder="Your message"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 mb-4"
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full py-3 bg-cyan-500 text-white font-semibold rounded-md hover:bg-cyan-400 transition duration-300"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

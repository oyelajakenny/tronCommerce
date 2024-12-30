import React from "react";
import Container from "@/components/Container";

const ContactPage = () => {
  return (
    <Container className="max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-6">
        We&apos;d love to hear from you. Please fill out the form below and
        we'll get back to you as soon as possible.
      </p>
      <form className="space-y-4">
        <div className="space-y-0.5">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Your name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="space-y-0.5">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Your email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="space-y-0.5">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            rows={6}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
          />
        </div>
        <button
          type="submit"
          className="bg-darkColor/80 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-darkColor hoverEffect"
        >
          Message
        </button>
      </form>
    </Container>
  );
};

export default ContactPage;

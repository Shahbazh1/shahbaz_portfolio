"use client";

import { useState } from "react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/mjgkjrjz", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset(); // ✅ clear form
      setShowToast(true); // ✅ show toast

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }

    setLoading(false);
  };

  return (
    <section className="w-full bg-white mb-10 sm:mb-12 md:mb-16 lg:mb-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
          Get In Touch
        </h2>
        <p className="mt-3 sm:mt-4 text-center text-gray-500 text-sm sm:text-base md:text-base leading-relaxed">
          Have a project in mind or just want to say hello?
          <br />
          Fill out the form below and I&apos;ll get back to you as soon as possible.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 sm:mt-10 md:mt-12 space-y-6 sm:space-y-8"
        >
          {/* Name & Email */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm sm:text-base font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm sm:text-base font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="mb-2 block text-sm sm:text-base font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-sm sm:text-base font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="Write your message..."
              required
              className="w-full resize-none rounded-lg border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
          </div>

          {/* Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-orange-500 px-6 sm:px-10 md:px-12 py-2.5 sm:py-3 md:py-4 text-white text-sm sm:text-base md:text-base font-medium hover:bg-orange-600 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {/* Toast */}
        {showToast && (
          <div className="fixed bottom-6 right-6 rounded-lg bg-green-500 px-5 py-3 text-white text-sm shadow-lg">
            Message sent successfully ✅
          </div>
        )}
      </div>
    </section>
  );
}

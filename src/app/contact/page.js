// app/contact/page.js

'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your API or email service
    alert('Message sent! (Not really, this is just a placeholder)');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-8 py-16">
      <h1 className="text-4xl font-extrabold text-[#45b3e7] text-center mb-4">Contact Us</h1>
      <p className="text-center text-sm text-gray-600 mb-10">
        Have questions, feedback, or support needs? Reach out to us using the form below or email us at{' '}
        <a href="mailto:info@convertbankstatementspro.com" className="text-[#e77945] underline">
          info@convertbankstatementspro.com
        </a>.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:ring-[#45b3e7] focus:border-[#45b3e7]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:ring-[#45b3e7] focus:border-[#45b3e7]"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:ring-[#45b3e7] focus:border-[#45b3e7]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#45b3e7] text-white font-semibold py-2 rounded hover:bg-[#349aca] transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

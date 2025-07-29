'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function FAQ() {
  const faqs = [
    {
      question: 'Do you store my files?',
      answer: 'No. Files are auto-deleted after 60 minutes to protect your privacy.'
    },
    {
      question: 'Can I convert scanned PDFs?',
      answer: 'Yes, we use OCR to detect text even in scanned or image-based PDFs.'
    },
    {
      question: 'Do you support international banks?',
      answer: 'Yes, our AI is trained on statement formats from over 100 countries.'
    },
    {
      question: 'How secure is my data?',
      answer: 'All data is encrypted in transit and automatically deleted after processing.'
    },
    {
      question: 'What file formats can I convert to?',
      answer: 'We currently support CSV, Excel, and JSON formats.'
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-center text-[#45b3e7] mb-4">
        Frequently Asked Questions
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Need help? Find quick answers below or <a href="/contact" className="text-[#e77945] underline">contact us</a>.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-5 py-4 bg-white text-left text-lg font-medium text-gray-800 hover:bg-gray-50"
            >
              <span>{faq.question}</span>
              <ChevronDownIcon
                className={`h-5 w-5 text-[#45b3e7] transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-5 pb-4 text-sm text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

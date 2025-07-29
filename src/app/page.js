// app/page.js (Next.js 13+ with App Router)

'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  return (
    <main className="min-h-screen font-sans bg-white text-black px-4">
      {/* Top Bar CTA */}
      <section className="bg-[#e6f7fd] text-center py-3 text-sm text-gray-700">
        <p>
          Looking to convert a PDF bank statement to CSV or Excel? <strong>Try it free in 1 click.</strong>
        </p>
      </section>

      {/* Hero Section */}
      <section className="py-20 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Convert Bank Statements to Excel or CSV Instantly
        </h1>
        <p className="text-lg mt-4 text-gray-600">
          Upload your PDF bank statements and download clean spreadsheets in seconds — powered by AI.
        </p>

        <div className="bg-[#d2f1fc] mt-10 p-10 w-full max-w-2xl mx-auto rounded border-dashed border-2 border-[#45b3e7]">
          <label className="cursor-pointer block">
            <input type="file" className="hidden" onChange={handleFileChange} />
            <div className="text-[#45b3e7] font-semibold text-lg">Upload Bank Statement</div>
            <p className="text-sm mt-1 text-gray-600">Drag and drop your files here, or click to browse</p>
            <p className="text-xs text-gray-500">Supports files up to 50MB</p>
          </label>
          {file && <p className="mt-3 text-sm font-medium text-gray-700">Selected: {file.name}</p>}
        </div>
      </section>

      {/* Trusted Logos */}
      <section className="text-center py-10">
        <h2 className="text-lg font-semibold text-gray-700">Trusted by professionals at</h2>
        <div className="flex justify-center flex-wrap gap-10 mt-6">
          <Image src="/bankofamerica.png" alt="Bank of America" width={100} height={32} />
          <Image src="/quickbooks.png" alt="QuickBooks" width={100} height={32} />
          <Image src="/xero.png" alt="Xero" width={100} height={32} />
          <Image src="/chase.png" alt="Chase" width={100} height={32} />
        </div>
      </section>

      {/* Feature Icons in Cards */}
      <section className="bg-[#d2f1fc] py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          { title: 'Bank-Level Security', text: 'Encrypted conversions using SSL. Files deleted after processing.' },
          { title: 'AI-Powered Accuracy', text: 'Convert PDF tables and scanned docs into clean spreadsheets.' },
          { title: 'Supports Global Banks', text: 'Upload any bank statement in PDF — worldwide formats supported.' },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold mb-2 text-[#e77945]">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Scanned Docs Section */}
      <section className="bg-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold text-[#0b2239] mb-4">We Also Handle Scanned Bank Statements</h2>
          <p className="text-gray-600 text-md">
            We support scanned PDFs, even with handwritten notes. Our system extracts the data and converts it into clean CSV files.
          </p>
        </div>
        <div className="flex-1">
          <Image src="/scanned-conversion.png" alt="Scanned PDF to Table Example" width={500} height={300} className="rounded-xl shadow-md" />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#eaf9fe] py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-10">
          {["Choose the file you want to convert.", "Let our AI work its magic.", "Download your CSV or Excel output."]
            .map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="bg-[#45b3e7] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">{i + 1}</div>
                <p className="text-gray-700 text-sm">{step}</p>
              </div>
            ))}
        </div>
        <div className="flex-1">
          <Image src="/how-it-works-graphic.png" alt="How It Works Illustration" width={400} height={400} className="mx-auto" />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6 md:px-20">
        <h2 className="text-3xl font-extrabold text-center text-[#e77945] mb-12">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              q: 'How does ConvertBankStatement process and convert PDF bank statements?',
              a: 'We use advanced AI, including Machine Learning and OCR, to convert statements into Excel, CSV, or JSON. Files are deleted after processing for privacy.'
            },
            {
              q: 'What kinds of bank statements can be converted?',
              a: 'We support all formats — no templates required. Our AI adapts to each layout and format globally.'
            },
            {
              q: 'Is my data secure with ConvertBankStatement?',
              a: 'Yes. All files are encrypted in transit, never shared, and deleted after conversion.'
            }
          ].map((faq, i) => (
            <details key={i} className="bg-white p-6 rounded-md shadow border border-[#e0e0e0]">
              <summary className="cursor-pointer text-lg font-semibold text-[#45b3e7]">{faq.q}</summary>
              <p className="mt-4 text-sm text-gray-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-10 text-sm text-gray-600 border-t flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={24} height={24} />
          <span className="font-bold text-black">ConvertBankStatement</span>
        </div>
        <div className="flex gap-6 text-xs mt-4 md:mt-0">
          <a href="#">Pricing</a>
          <a href="#">FAQ</a>
          <a href="#">Terms</a>
          <a href="mailto:info@convertbankstatement.io">Contact Us</a>
        </div>
      </footer>
    </main>
  );
}

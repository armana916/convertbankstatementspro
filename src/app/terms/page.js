'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => setFile(e.target.files[0]);

  return (
    <main className="min-h-screen font-sans bg-white text-black px-4">
      {/* Top CTA Bar */}
      <section className="bg-[#e6f7fd] text-center py-3 text-sm text-gray-700">
        <p>
          Looking to convert a PDF bank statement to CSV or Excel? <strong>Try it free in 1 click.</strong>
        </p>
      </section>

      {/* Hero */}
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

      {/* Features */}
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

      {/* Scanned Docs */}
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
          {["Choose the file you want to convert.", "Let our AI work its magic.", "Download your CSV or Excel output."].map((step, i) => (
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

      {/* Pricing Section */}
      <section className="bg-[#d2f1fc] py-20 px-4 md:px-20">
        <h2 className="text-3xl font-extrabold text-center text-[#0b2239] mb-12">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-[#e77945] font-bold text-lg mb-2">Free</h3>
            <p className="text-sm text-gray-600 mb-4">Try it out with limited features</p>
            <p className="text-3xl font-bold text-[#45b3e7] mb-4">$0</p>
            <ul className="text-sm text-gray-600 space-y-1 mb-6">
              <li>✓ 3 free conversions/month</li>
              <li>✓ Basic OCR accuracy</li>
              <li>✓ Limited export formats</li>
            </ul>
            <Link href="/pricing" className="inline-block bg-[#45b3e7] text-white px-4 py-2 rounded hover:bg-[#349aca]">Get Started</Link>
          </div>
          <div className="bg-white rounded-lg shadow-md border-2 border-[#e77945] p-6 text-center">
            <h3 className="text-[#e77945] font-bold text-lg mb-2">Pro</h3>
            <p className="text-sm text-gray-600 mb-4">For frequent users and businesses</p>
            <p className="text-3xl font-bold text-[#45b3e7] mb-4">$19/mo</p>
            <ul className="text-sm text-gray-600 space-y-1 mb-6">
              <li>✓ Unlimited conversions</li>
              <li>✓ High-accuracy OCR</li>
              <li>✓ Export to CSV, Excel, JSON</li>
              <li>✓ Priority support</li>
            </ul>
            <Link href="/pricing" className="inline-block bg-[#e77945] text-white px-4 py-2 rounded hover:bg-[#d46632]">Upgrade to Pro</Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-[#e77945] font-bold text-lg mb-2">Enterprise</h3>
            <p className="text-sm text-gray-600 mb-4">Custom needs? We've got you.</p>
            <p className="text-2xl font-bold text-[#45b3e7] mb-4">Contact Us</p>
            <ul className="text-sm text-gray-600 space-y-1 mb-6">
              <li>✓ API Access</li>
              <li>✓ Team workflows</li>
              <li>✓ SLA & compliance</li>
              <li>✓ Dedicated support</li>
            </ul>
            <Link href="/pricing" className="inline-block bg-[#45b3e7] text-white px-4 py-2 rounded hover:bg-[#349aca]">Request a Demo</Link>
          </div>
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
    </main>
  );
}

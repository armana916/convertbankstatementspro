// app/page.js (Next.js 13+ with App Router)

'use client';

import { useState } from 'react';

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
          <img src="/bankofamerica.png" alt="Bank of America" className="h-8" />
          <img src="/quickbooks.png" alt="QuickBooks" className="h-8" />
          <img src="/xero.png" alt="Xero" className="h-8" />
          <img src="/chase.png" alt="Chase" className="h-8" />
        </div>
      </section>

      {/* Feature Icons in Cards */}
      <section className="bg-[#d2f1fc] py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="font-bold mb-2 text-[#e77945]">Bank-Level Security</h3>
          <p className="text-sm text-gray-700">Encrypted conversions using SSL. Files deleted after processing.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="font-bold mb-2 text-[#e77945]">AI-Powered Accuracy</h3>
          <p className="text-sm text-gray-700">Convert PDF tables and scanned docs into clean spreadsheets.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="font-bold mb-2 text-[#e77945]">Supports Global Banks</h3>
          <p className="text-sm text-gray-700">Upload any bank statement in PDF — worldwide formats supported.</p>
        </div>
      </section>

      {/* Handle Scanned Docs Section */}
      <section className="bg-[#ffffff] py-20 px-6 md:px-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold text-[#0b2239] mb-4">We Also Handle Scanned Bank Statements</h2>
          <p className="text-gray-600 text-md">
            We support scanned PDFs, even with handwritten notes. Our system extracts the data and converts it into clean CSV files.
          </p>
        </div>
        <div className="flex-1">
          <img src="/scanned-conversion.png" alt="Scanned PDF to Table Example" className="rounded-xl shadow-md" />
        </div>
      </section>

      {/* How To Section */}
      <section className="bg-[#eaf9fe] py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-10">
          <div className="flex items-start gap-4">
            <div className="bg-[#45b3e7] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">1</div>
            <p className="text-gray-700 text-sm">Click the \"Choose File\" button on our homepage or drag and drop your file into the designated area.</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-[#45b3e7] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">2</div>
            <p className="text-gray-700 text-sm">Choose the PDF file you need to convert.</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-[#45b3e7] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">3</div>
            <p className="text-gray-700 text-sm">Download your converted file in CSV or Excel format and make your financial management easier!</p>
          </div>
        </div>
        <div className="flex-1">
          <img src="/how-it-works-graphic.png" alt="How It Works Illustration" className="w-full max-w-sm mx-auto" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-6 md:px-20">
        <h2 className="text-3xl font-extrabold text-center text-[#e77945] mb-12">Frequently asked questions</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <details className="bg-white p-6 rounded-md shadow border border-[#e0e0e0]">
            <summary className="cursor-pointer text-lg font-semibold text-[#45b3e7]">How does ConvertBankStatement process and convert PDF bank statements?</summary>
            <p className="mt-4 text-sm text-gray-700">ConvertBankStatement uses advanced AI technologies, including Machine Learning and OCR, to turn PDF bank statements into Excel, CSV, or JSON formats.<br /><br />Our standout feature is our high accuracy rate when converting bank statements. This high level of precision makes ConvertBankStatement an ideal choice for those who require accuracy for workflow automation.</p>
          </details>
          <details className="bg-white p-6 rounded-md shadow border border-[#e0e0e0]">
            <summary className="cursor-pointer text-lg font-semibold text-[#45b3e7]">What kinds of bank statements can be converted?</summary>
            <p className="mt-4 text-sm text-gray-700">Our tool can convert any bank statement, no matter the format or layout. We don't use fixed templates, so our tool works with every kind of statement. Our AI technology makes it easy to identify the data you need from any bank statement in the world.</p>
          </details>
          <details className="bg-white p-6 rounded-md shadow border border-[#e0e0e0]">
            <summary className="cursor-pointer text-lg font-semibold text-[#45b3e7]">Is my data secure with ConvertBankStatement?</summary>
            <p className="mt-4 text-sm text-gray-700">Your data security is our top priority. We assure you that your information is completely safe with ConvertBankStatement.<br /><br />After conversion, your data is promptly removed from our systems to ensure maximum privacy and security.</p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-10 text-sm text-gray-600 border-t flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-6" />
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

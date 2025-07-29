// app/upload/page.js (Next.js 13+ with App Router, Mobile Friendly)

'use client';

import { useState } from 'react';

export default function Upload() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => setFile(e.target.files[0]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-16 bg-white text-center">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Upload Your Bank Statement</h1>
      <p className="text-gray-600 text-sm sm:text-base max-w-md mb-6">
        We support PDFs from most banks. Upload your file and we’ll handle the rest.
      </p>
      <div className="bg-[#d2f1fc] w-full max-w-md p-6 rounded border-dashed border-2 border-[#45b3e7] text-center">
        <label className="cursor-pointer block">
          <input
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={handleChange}
          />
          <div className="text-[#45b3e7] font-semibold text-base sm:text-lg">
            Upload Bank Statement
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Drag & drop your file or click to select
          </p>
        </label>
        {file && (
          <p className="mt-3 text-sm text-gray-700 font-medium truncate">
            Selected: {file.name}
          </p>
        )}
        <button className="mt-6 bg-[#45b3e7] text-white px-6 py-2 rounded hover:bg-[#3ca1cd] text-sm sm:text-base">
          Convert Now
        </button>
        <p className="mt-4 text-xs text-gray-400">
          Your file will be auto-deleted after processing.
        </p>
      </div>
    </div>
  );
}

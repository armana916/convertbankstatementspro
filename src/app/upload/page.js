// components/Upload.js
export default function Upload() {
  return (
    <div className="max-w-xl mx-auto bg-[#d2f1fc] p-10 rounded-lg border-2 border-dashed border-[#45b3e7] text-center">
      <h1 className="text-3xl font-extrabold text-[#0b2239] mb-4">Upload Your Bank Statement</h1>
      <p className="text-gray-600 mb-6">
        We support PDFs from most banks. Upload your file and we’ll handle the rest.
      </p>

      <label className="block cursor-pointer">
        <input
          type="file"
          accept="application/pdf"
          className="hidden"
        />
        <div className="bg-white text-[#45b3e7] font-semibold py-2 px-4 rounded border border-[#45b3e7] inline-block hover:bg-[#f0fbff] transition">
          Choose File
        </div>
      </label>

      <button className="mt-6 bg-[#45b3e7] hover:bg-[#3aa1cc] text-white font-bold py-2 px-6 rounded transition">
        Convert Now
      </button>

      <p className="mt-4 text-sm text-gray-500">
        Your file will be auto-deleted after processing.
      </p>
    </div>
  );
}

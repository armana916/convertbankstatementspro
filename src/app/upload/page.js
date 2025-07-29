export default function Upload() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6">Upload Your Bank Statement</h1>
      <p className="mb-4 text-gray-600">We support PDFs from most banks. Upload your file and we’ll handle the rest.</p>
      <input type="file" className="block mx-auto p-2 border rounded mb-4" accept="application/pdf" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Convert Now</button>
      <p className="mt-4 text-sm text-gray-400">Your file will be auto-deleted after processing.</p>
    </div>
  )
}

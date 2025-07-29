export default function Contact() {
  return (
    <div className="max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
        <textarea placeholder="How can we help you?" rows="5" className="w-full p-2 border rounded"></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
      </form>
    </div>
  )
}

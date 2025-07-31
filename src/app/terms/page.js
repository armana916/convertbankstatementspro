'use client';

import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-gray-800 font-sans max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-[#0b2239] mb-8 text-center">Terms of Service</h1>

      <p className="mb-4 text-sm text-gray-600">
        These Terms of Service ("Terms") govern your use of ConvertBankStatementsPro. By using our service, you agree to be bound by these Terms.
      </p>

      <h2 className="text-2xl font-bold text-[#e77945] mt-10 mb-2">1. Service Overview</h2>
      <p className="text-sm text-gray-700 mb-4">
        ConvertBankStatementsPro is an AI-powered file conversion service that enables users to upload PDF bank statements and convert them to formats such as CSV or Excel.
      </p>

      <h2 className="text-2xl font-bold text-[#e77945] mt-10 mb-2">2. User Responsibilities</h2>
      <p className="text-sm text-gray-700 mb-4">
        You are responsible for ensuring that you have the legal right to upload and convert any document submitted to our platform.
      </p>

      <h2 className="text-2xl font-bold text-[#e77945] mt-10 mb-2">3. Data & Privacy</h2>
      <p className="text-sm text-gray-700 mb-4">
        All files are encrypted in transit and deleted automatically after processing. We do not store or share your data.
      </p>

      <h2 className="text-2xl font-bold text-[#e77945] mt-10 mb-2">4. Prohibited Use</h2>
      <p className="text-sm text-gray-700 mb-4">
        You may not use the service for illegal activities, reverse engineering, or to upload content that infringes upon any third-party rights.
      </p>

      <h2 className="text-2xl font-bold text-[#e77945] mt-10 mb-2">5. Disclaimer of Warranties</h2>
      <p className="text-sm text-gray-700 mb-4">
        The service is provided "as is" without warranties of any kind. We do not guarantee accuracy or availability at all times.
      </p>

      <h2 className="text-2xl font-bold text-[#e77945] mt-10 mb-2">6. Limitation of Liability</h2>
      <p className="text-sm text-gray-700 mb-4">
        We are not liable for any indirect, incidental, or consequential damages arising from the use of our service.
      </p>

      <h2 className="text-2xl font-bold text-[#e77945] mt-10 mb-2">7. Changes to Terms</h2>
      <p className="text-sm text-gray-700 mb-4">
        We may update these Terms at any time. Continued use of the service constitutes your acceptance of the new Terms.
      </p>

      <h2 className="text-2xl font-bold text-[#e77945] mt-10 mb-2">8. Contact</h2>
      <p className="text-sm text-gray-700 mb-8">
        If you have questions or concerns, please <Link href="/contact" className="text-[#45b3e7] underline">contact us</Link>.
      </p>

      <div className="text-center">
        <Link href="/" className="text-sm text-[#45b3e7] underline hover:text-[#349aca]">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}

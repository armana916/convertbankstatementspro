// app/terms/page.js

'use client';

import Link from 'next/link';

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 text-gray-800">
      <h1 className="text-4xl font-extrabold text-[#45b3e7] mb-6 text-center">Terms of Service</h1>
      <p className="text-sm text-gray-600 mb-10 text-center">
        Updated July 30, 2025. Questions? <Link href="/contact" className="text-[#e77945] underline">Contact us</Link>.
      </p>

      <section className="space-y-6 text-sm leading-6">
        <div>
          <h2 className="text-lg font-bold text-[#e77945] mb-2">1. Acceptance of Terms</h2>
          <p>
            By using ConvertBankStatement.io, you agree to these Terms of Service. If you do not agree, do not use our platform.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#e77945] mb-2">2. Service Description</h2>
          <p>
            Our service allows users to convert bank statements in PDF format into CSV, Excel, or JSON using AI-powered tools.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#e77945] mb-2">3. Privacy & File Handling</h2>
          <p>
            Files are encrypted in transit and automatically deleted within 60 minutes after processing. We never store or share your data.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#e77945] mb-2">4. Usage Limits</h2>
          <p>
            Free plans may be limited in volume and functionality. Abuse or automated scraping is strictly prohibited.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#e77945] mb-2">5. Refund Policy</h2>
          <p>
            All purchases are final. If you experience issues with your conversion, contact our team and we’ll do our best to help.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#e77945] mb-2">6. Modifications</h2>
          <p>
            We reserve the right to update or change these terms at any time. Your continued use of the site constitutes acceptance of those changes.
          </p>
        </div>
      </section>

      <p className="mt-12 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} ConvertBankStatement.io — All rights reserved.
      </p>
    </div>
  );
}

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Clickable Site Name */}
        <Link href="/" className="text-xl font-extrabold text-[#45b3e7] hover:opacity-80 transition">
          ConvertBankStatementsPro
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-6 text-sm font-medium text-[#0b2239]">
          <Link href="/" className="hover:text-[#45b3e7] transition">Home</Link>
          <Link href="/pricing" className="hover:text-[#45b3e7] transition">Pricing</Link>
          <Link href="/faq" className="hover:text-[#45b3e7] transition">FAQ</Link>
          <Link
            href="/upload"
            className="bg-[#45b3e7] text-white px-4 py-2 rounded-md shadow hover:bg-[#369acb] transition"
          >
            Try It Free
          </Link>
        </nav>
      </div>
    </header>
  );
}

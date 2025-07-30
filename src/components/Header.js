import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-extrabold text-[#45b3e7] hover:opacity-80 transition">
          ConvertBankStatementsPro
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 text-sm font-medium text-[#0b2239] flex items-center">
          <Link href="/" className="hover:text-[#45b3e7] transition">Home</Link>
          <Link href="/pricing" className="hover:text-[#45b3e7] transition">Pricing</Link>
          <Link href="/login" className="hover:text-[#45b3e7] transition">Login</Link>
          <Link href="/register" className="hover:text-[#45b3e7] transition">Register</Link>
          <Link
            href="/upload"
            className="ml-4 bg-[#45b3e7] text-white px-4 py-2 rounded-md shadow hover:bg-[#369acb] transition"
          >
            Try It Free
          </Link>
        </nav>
      </div>
    </header>
  );
}

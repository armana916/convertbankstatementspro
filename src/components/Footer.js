import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-10 px-6 text-sm text-gray-600 border-t mt-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Image src="/logo.svg" alt="Logo" width={24} height={24} />
          <span className="font-bold text-black">ConvertBankStatementsPro</span>
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-gray-600">
          <Link href="/">Home</Link>
          <Link href="/upload">Upload</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <p className="text-xs text-gray-400 mt-4 md:mt-0">© 2025 ConvertBankStatementsPro. All rights reserved.</p>
      </div>
    </footer>
  );
}

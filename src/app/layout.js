import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'ConvertBankStatementsPro',
  description: 'Fast. Accurate. Secure. Convert PDF bank statements to Excel or CSV.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 font-sans">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

import type { Metadata } from 'next';
import NewsHeader from './components/headers';
import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google'
import Footer from './components/footer';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'NEWS APP',
  description: 'News App dengan NEXT JS',
};

// Font Inter
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Font Playfair Display  
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning >
      <body className="font-sans antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-color">
        <Providers>
          <NewsHeader />
          <main className="min-h-screen">
            <div className="max-w-5xl mx-auto px-4 py-10">
              {children}
            </div>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}


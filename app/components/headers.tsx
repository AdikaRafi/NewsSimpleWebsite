'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { HiNewspaper } from "react-icons/hi2";

const NewsHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");
  const [currentDate, setCurrentDate] = useState('');

  // Get current date for left header and format it to Indonesian
  useEffect(() => {
    setMounted(true);
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    // Format: Senin, 8 Januari 2026(Format in Indonesian, you can change to our language)
    setCurrentDate(date.toLocaleDateString('id-ID', options));
  }, []);

  // Toggle theme to dark and light
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };



  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:bg-gray-900 dark:border-gray-600 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between gap-4">
          
          {/* Left Section: Logo, Name, Date */}
          <div className="hidden md:flex flex-col justify-center min-w-[200px]">
            {/* Space for Date */}
            <div className="flex items-center gap-6 text-sm font-medium text-gray-500 uppercase tracking-wide dark:text-gray-400 pl-1 border-l-2 border-gray-900 dark:border-white/95 ml-1">
              <span className="leading-6">{currentDate || 'Memuat tanggal...'}</span>
            </div>
          </div>

          {/* Middle Section: Name, Logo and description*/}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full group">
              <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-red-600 p-1.5 rounded text-white group-hover:bg-red-700 transition-colors">
                 <HiNewspaper size={34} />
              </div>
              <span className="text-4xl md:text-5xl font-extrabold font-serif tracking-tight text-gray-900 dark:!text-white">
                <h2>The Daily News</h2>
              </span>
            </Link>
            <p className='text-xs font-small text-center text-gray-500 dark:text-gray-400 pl-1 mt-1'>News Website that created with NEXT.JS with API from newsdata.io</p>
            </div>
          </div>

          {/* Right Section: Navigation & Theme Switch */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-400">
              <Link href="/" className="text-sm font-semibold leading-6 text-gray-900 hover:text-red-600 dark:text-white dark:hover:text-red-400 transition-colors">
                Home
              </Link>
              <Link href="/" className="text-sm font-semibold leading-6 text-gray-900 hover:text-red-600 dark:text-white dark:hover:text-red-400 transition-colors">
                News
              </Link>
            </nav>
            
            {/* Vertical Divider */}
            <div className="h-6 w-px bg-gray-200 dark:bg-gray-700"></div>

            {/* Theme Switch Button */}
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-gray-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-15 dark:ring-white dark:text-white/95 dark:hover:bg-white/15 transition-all"
              aria-label="Toggle Theme"
            >
              {mounted && (theme === "dark") ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Hamburger Button (Mobile Only) */}
          <div className="flex md:hidden items-center gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-red-600 p-1.5 rounded text-white group-hover:bg-red-700 transition-colors">
                  <HiNewspaper size={45} />
              </div>
              <span className="text-2xl md:text-3xl font-extrabold font-serif tracking-tight text-gray-900 dark:text-white">
                <h2>The Daily News</h2>
              </span>
           </Link>
           <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-gray-400"
            >
              {mounted && (theme === "dark") ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Buka menu utama</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <div className="space-y-4 px-4 py-6">
            {/* Mobile Links */}
            <div className="flex flex-col space-y-3">
              <Link href="/" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800">
                Home
              </Link>
              <Link href="/news" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800">
                News
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NewsHeader;
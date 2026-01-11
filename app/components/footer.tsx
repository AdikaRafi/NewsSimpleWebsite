import Link from 'next/link';
import { HeartIcon } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 bg-white py-6 dark:bg-gray-900 dark:border-gray-800 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Layout Grid 3 Column for Desktop, Flex Column for Mobile */}
        <div className="flex flex-col items-center gap-4 md:grid md:grid-cols-3">
          
          {/* Left Section: Copyright & Identity */}
          {/* md:items-start align text left on desktop */}
          <div className="flex flex-col items-center md:items-start order-2 md:order-1">
            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              The Daily News Project
            </span>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center md:text-left">
              &copy; {currentYear} Simple Project NextJS.
            </p>
          </div>

          {/* Center Section: "Created with love" */}
          {/* md:justify-center justify center on desktop */}
          <div className="flex items-center justify-center gap-1 text-xs text-gray-500 dark:text-gray-500 order-1 md:order-2 w-full">
              <span>Dibuat dengan sepenuh</span>
              <HeartIcon size={10} className="text-red-500 fill-red-500 mx-0.5" />
              <span>oleh</span>
              <span className="font-medium text-gray-700 dark:text-gray-300 transition-colors">developer</span>
              <span className="font-medium text-gray-700 dark:text-gray-300 transition-colors">SoftSpoken</span>
          </div>

          {/* Right Section: Socials & Repo Link */}
          {/* md:justify-end justify right on desktop */}
          <div className="flex items-center justify-center md:justify-end gap-4 order-3 md:order-3">
            <Link 
              href="https://github.com/AdikaRafi" 
              target="_blank"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub Repository"
            >
              <FaGithub size={20} />
            </Link>
            <Link 
              href="https://linkedin.com/in/adika-brahmana-rafi-sejati" 
              target="_blank"
              className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
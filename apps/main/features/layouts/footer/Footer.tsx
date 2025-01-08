import Link from "next/link";

/**
 * Footer component
 *
 * @returns {JSX.Element} Footer
 */

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gradient-to-r from-pink-50 to-purple-50">
      <p className="text-xs text-gray-600">
        © 2025 GoodLogin. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-xs hover:text-purple-600 transition-colors"
          href="#"
        >
          Terms of Service
        </Link>
        <Link
          className="text-xs hover:text-purple-600 transition-colors"
          href="#"
        >
          Privacy
        </Link>
      </nav>
    </footer>
  );
};

Footer.displayName = "Footer";

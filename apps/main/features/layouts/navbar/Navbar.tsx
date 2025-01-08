import Link from "next/link";
import { Lock } from "lucide-react";

/**
 * Navbar component
 * Responsibility - Display the navbar
 * @returns {JSX.Element} Navbar
 */

export const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b">
      <Link className="flex items-center justify-center" href="/">
        <Lock className="h-6 w-6 mr-2" />
        <span className="font-bold text-lg">GoodLogin</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:text-blue-600" href="/about">
          About
        </Link>
        <Link
          className="text-sm font-medium hover:text-blue-600"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

Navbar.displayName = "Navbar";

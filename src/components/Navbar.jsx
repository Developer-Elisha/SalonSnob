import { useState } from "react";
import { navLinks } from "../../constants";
import { Menu, X } from "lucide-react"; // or use your own icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#CAA986] opacity-60 px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a href="#hairsalon" className="flex items-center gap-2">
          <img src="/images/favicon.png" alt="logo" className="w-10 h-10 -mr-4" />
          <p className="text-4xl md:text-5xl mt-2 font-allura">alon Snob</p>
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="hover:underline transition duration-150 font-Liberty-Regular text-2xl"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <ul className="flex flex-col mt-4 space-y-4 md:hidden text-lg font-medium items-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="block hover:underline transition duration-150"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

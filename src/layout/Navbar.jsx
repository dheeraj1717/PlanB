import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../public/assets/PlanBLogo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Travel to Jordan", path: "/travel-to-jordan" },
  { name: "Holidays & Ticketing", path: "/holidays-ticketing" },
  { name: "Luxury Events", path: "/luxury-events" },
  { name: "Hajj & Umrah", path: "/hajj-umrah" },
  { name: "Contact Us", path: "/contact" },
  { name: "About Us", path: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility

  return (
    <nav className="w-full items-center bg-white z-50 top-0">
      <div className="max-w-[1600px] h-[80px] sm:h-[100px] mx-auto flex justify-between items-end px-6 pb-6">
        {/* Logo */}
        <div>
          <img
            src={Logo}
            alt="PlanB"
            className="absolute top-[20px] sm:top-0 z-50  w-[140px] sm:w-[300px] max-h-[100px] xl:max-h-[140px]"
          />
        </div>

        <div className="flex items-center gap-9">
          {/* Desktop Navigation */}
          <ul className="hidden xl:flex space-x-9">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="text-[#167989] hover:text-[#0D0D0D] font-bold hover:transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Login & Language Selection */}
          <div className="flex items-center space-x-4">
            <button className="text-[#167989] border-[2px] sm:border-[3px] border-[#0D0D0D] font-bold text-[14px] sm:text-[16px] leading-[18.38px] px-4 py-1 rounded-[5px] cursor-pointer">
              Login
            </button>

            {/* Language Dropdown */}
            <div className="relative text-[#167989] font-bold z-[100] text-[14px] sm:text-[16px]">
              <button
                className="cursor-pointer flex items-center gap-1 transition-transform duration-300"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {language}
                <span
                  className={`transform transition-transform duration-300 ${
                    showDropdown ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>

              {showDropdown && (
                <ul className="absolute right-0 mt-4 w-24 bg-white shadow-md rounded-md overflow-hidden">
                  <li
                    onClick={() => {
                      setLanguage("EN");
                      setShowDropdown(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    EN
                  </li>
                  <li
                    onClick={() => {
                      setLanguage("AR");
                      setShowDropdown(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    AR
                  </li>
                </ul>
              )}
            </div>

            {/* Mobile Menu Icon */}
            <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden">
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
{isOpen && (
  <div className="absolute top-[80px] sm:top-[100px] left-0 w-full bg-white shadow-md p-4 z-50">
    <ul className="flex flex-col space-y-3">
      {navLinks.map((link, index) => (
        <li key={index}>
          <a
            href={link.path}
            className="text-[#167989] hover:text-[#0D0D0D] font-semibold"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
)}

    </nav>
  );
};

export default Navbar;

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const footerLinks = {
    "What we do": [
      { label: "Features", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Security", href: "#" },
      { label: "For Business", href: "#" },
    ],
    "Who we are": [
      { label: "About us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Brand Center", href: "#" },
      { label: "Privacy", href: "#" },
    ],
    "Use WhatsApp": [
      { label: "Android", href: "#" },
      { label: "iPhone", href: "#" },
      { label: "Mac/PC", href: "#" },
      { label: "WhatsApp Web", href: "#" },
    ],
    "Need help?": [
      { label: "Contact Us", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Apps", href: "#" },
      { label: "Security Advisories", href: "#" },
    ],
  };

  return (
    <footer className="pt-10 pb-24">
      <div className="max-w-[1360px] mx-auto px-10 !bg-black/[.18] rounded-3xl">
        {/* Desktop View - Hidden on Mobile */}
        <div className="hidden lg:block">
          <div className="flex justify-between pt-16 pb-12">
            {/* Left Part - Logo and Download */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 text-white">
                <FaWhatsapp className="w-8 h-8" />
                <span className="text-xl font-medium">P2P Social</span>
              </div>
              <button className="bg-[#25D366] text-black px-6 py-2.5 rounded-full font-medium hover:bg-opacity-90 transition-colors flex items-center gap-2">
                Download <span className="text-lg">↓</span>
              </button>
            </div>

            {/* Right Part - Navigation Links */}
            <div className="grid grid-cols-4 gap-16">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category} className="flex flex-col gap-4">
                  <h3 className="text-[#8696A0] text-sm font-medium">
                    {category}
                  </h3>
                  <ul className="flex flex-col gap-4">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-white hover:underline"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section with Border */}
          <div className="border-t border-gray-800">
            <div className="flex items-center justify-between py-6">
              <div className="flex items-center gap-6">
                <span className="text-sm text-gray-400">2025 © P2P Social</span>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:underline"
                >
                  Terms & Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:underline"
                >
                  Sitemap
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="p-2 rounded-full border border-gray-700 text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="p-2 rounded-full border border-gray-700 text-gray-400 hover:text-white transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="p-2 rounded-full border border-gray-700 text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="p-2 rounded-full border border-gray-700 text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </Link>
              </div>

              {/* Language Selector */}
              <select className="bg-transparent border border-gray-700 rounded-full px-4 py-2 text-sm text-gray-400">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>

        {/* Mobile View - Hidden on Desktop */}
        <div className="lg:hidden">
          {/* Download Button */}
          <div className="flex justify-center pt-16 pb-12">
            <button className="bg-[#25D366] text-black px-6 py-2.5 rounded-full font-medium hover:bg-opacity-90 transition-colors flex items-center gap-2">
              Download <span className="text-lg">↓</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-8 py-8">
            <Link
              href="#"
              className="p-2 rounded-full border border-gray-700 text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full border border-gray-700 text-gray-400 hover:text-white transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full border border-gray-700 text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full border border-gray-700 text-gray-400 hover:text-white transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </Link>
          </div>

          {/* Logo */}
          <div className="flex justify-center items-center gap-2 text-white mb-8">
            <FaWhatsapp className="w-8 h-8" />
            <span className="text-xl font-medium">P2P Social</span>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 px-4 mb-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col gap-4">
                <h3 className="text-[#8696A0] text-sm font-medium">
                  {category}
                </h3>
                <ul className="flex flex-col gap-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white hover:underline text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-4">
            <div className="flex flex-col items-center gap-4 py-6">
              <select className="bg-transparent border border-gray-700 rounded-full px-4 py-2 text-sm text-gray-400 w-64">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
              <div className="flex flex-col items-center gap-2">
                <Link href="#" className="text-xs text-gray-400">
                  Sitemap
                </Link>
                <Link href="#" className="text-xs text-gray-400">
                  Terms & Privacy Policy
                </Link>
                <span className="text-xs text-gray-400">2025 © P2P Social</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { FaApple, FaGooglePlay, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const footerLinks = {
    "What we do": [
      { label: "Careers", href: "#" },

      { label: "Develoepr", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Security", href: "#" },
    ],
    "Who we are": [
      { label: "About us", href: "#" },
      { label: "Features", href: "#" },
    ],

    "Need help?": [
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Help Center", href: "#" },
    ],
  };

  return (
    <footer className="pt-10 pb-24">
      <div className="max-w-[1360px] mx-auto px-10 !bg-black/[.18] rounded-3xl">
        {/* Desktop View - Hidden on Mobile */}
        <div className="hidden lg:block">
          <div className="flex justify-between pt-16 pb-12">
            {/* Left Part - Logo and Download */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-white">
                <FaWhatsapp className="w-8 h-8" />
                <span className="text-xl font-medium">Selfie</span>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="#"
                  className="flex items-center bg-black hover:bg-black/90 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <FaGooglePlay className="w-6 h-6 text-white" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-light">GET IT ON</span>
                      <span className="text-base font-medium">Google Play</span>
                    </div>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="flex items-center bg-black hover:bg-black/90 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <FaApple className="w-6 h-6 text-white" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-light">
                        Download on the
                      </span>
                      <span className="text-base font-medium">App Store</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Part - Navigation Links */}
            <div className="grid grid-cols-3 gap-16">
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
                <span className="text-base text-gray-200">
                  2025 selfie LLC and it&apos;s all other affiliates{" "}
                </span>
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

              <p className="text-base text-gray-200">
                World&apos;s first decentralized community platform
              </p>
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
            <span className="text-xl font-medium">Selfie</span>
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
              <p className="text-base text-gray-200">
                World&apos;s first decentralized community platform
              </p>
              <div className="flex flex-col items-center gap-2">
                <Link href="#" className="text-xs text-gray-400">
                  Terms & Conditions
                </Link>
                <span className="text-xs text-gray-200">
                  2025 selfie LLC and it&apos;s all other affiliates{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

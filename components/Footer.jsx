"use client";

import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube  } from "react-icons/fa";
import logo from "@/public/logo-footer.svg";

const Footer = () => {
  return (
    <footer className="min-h-32 bg-[#170F0F] mx-auto p-5 mt-5">
      <div className="container mx-auto">

        <div className="flex justify-between items-start max-sm:flex-col sm:items-start">

          {/* Logo + Description */}
          <div className="flex-1">
            <Image
              src={logo}
              alt="logo"
              width={180}
              height={80}
              className="w-44"
            />

            <p className="text-white text-md pt-2 whitespace-pre-line text-justify">
              CyberDude Networks Pvt. Ltd. is a startup that craves to create creative products.
            </p>

            <small className="text-white">
              We stimulate creativity in everything that appears to our eye. We love doing it.
            </small>
          </div>

          {/* Links Section */}
          <div className="flex-1 flex justify-around max-sm:justify-start max-sm:pt-5">

            {/* About */}
            <div className="p-5 max-sm:px-0">
              <p className="text-white font-bold pb-2 uppercase">About</p>

              <ul className="space-y-2 text-sm text-white">
                <li>
                  <a href="#" className="inline-block transition hover:text-orange-500 hover:translate-x-1">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block transition hover:text-orange-500 hover:translate-x-1">
                    Location
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block transition hover:text-orange-500 hover:translate-x-1">
                    Contact feedback
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="p-5 max-sm:px-0">
              <p className="text-white font-bold pb-2 uppercase">Social</p>

              <div className="text-white flex gap-4 text-lg"> 
                <a href="https://www.youtube.com/user/CyberDudeNetworks" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500" aria-label="YouTube">
                  <FaYoutube />
                </a>
                <a href="https://www.facebook.com/cdudenetworks" target="_blank" className="hover:text-orange-500" aria-label="Facebook">
                  <FaFacebookF />
                </a>

                <a href="https://twitter.com/cdudenetworks" target="_blank" className="hover:text-orange-500" aria-label="Twitter">
                  <FaTwitter />
                </a>

                <a href="https://www.instagram.com/cdudenetworks" target="_blank" className="hover:text-orange-500" aria-label="Instagram">
                  <FaInstagram />
                </a>

                <a href="https://www.linkedin.com/company/cyberdude-networks" target="_blank" className="hover:text-orange-500" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t-2 border-gray-600 w-full pt-5 text-center">
        <p className="text-white text-sm">
          &copy; 2026 CyberDude Networks Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
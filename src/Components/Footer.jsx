import React from "react";
import { Link } from "react-router-dom";
import { FaTiktok, FaInstagram, FaDiscord, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#33C7FF] border-4 border-black rounded-xl m-4 p-8 text-black">
      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Left Section - FEAST & INFO and Logo */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <div className="grid grid-cols-2 gap-10 text-left">
            <div>
              <h2 className="font-bold">FEAST</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/404" className="italic hover:underline">
                    SHOP ALL
                  </Link>
                </li>
                <li>
                  <Link to="/404" className="italic hover:underline">
                    CHOCOLATE
                  </Link>
                </li>
                <li>
                  <Link to="/404" className="italic hover:underline">
                    BUNDLES
                  </Link>
                </li>
                <li>
                  <Link to="/404" className="italic hover:underline">
                    LIMITED TIME
                  </Link>
                </li>
                <li>
                  <Link to="/404" className="italic hover:underline">
                    FIND A STORE
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold">INFO</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/404" className="italic hover:underline">
                    SOURCING
                  </Link>
                </li>
                <li>
                  <Link to="/404" className="italic hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/404" className="italic hover:underline">
                    CONTACT US
                  </Link>
                </li>
                <li>
                  <Link to="/404" className="italic hover:underline">
                    MY ACCOUNT
                  </Link>
                </li>
                <li>
                  <Link to="/404" className="italic hover:underline">
                    CAREERS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Logo */}
          <div className="mt-4 ">
            <img src="./logo1.webp" alt="Feastables Logo" className="w-48" />
          </div>
        </div>

        {/* Right Section - Socials & Signup */}
        <div className="flex flex-col items-center text-center mt-6 md:mt-0">
          {/* Social Media */}
          <div className="flex space-x-6 text-4xl  mb-4">
            <Link to="https://www.tiktok.com/@feastables" className="hover:underline ">
              <FaTiktok />
            </Link>
            <Link to="https://www.instagram.com/feastables" className="hover:underline">
              <FaInstagram />
            </Link>
            <Link to="https://discord.com/invite/chhxWZK2MK" className="hover:underline">
              <FaDiscord />
            </Link>
            <Link to="https://twitter.com/feastables" className="hover:underline">
              <FaXTwitter />
            </Link>
          </div>

          {/* Signup Section */}
          <div className="w-full max-w-md">
            <p className="font-bold">TEXT FEAST TO 69420</p>
            <p className="text-xs">
              BY SIGNING UP VIA TEXT, YOU AGREE TO RECEIVE RECURRING AUTOMATED
              MARKETING MESSAGES...
            </p>
            <p className="mt-4 font-bold">
              GET FEASTABLES CONTENT SENT TO YOU
            </p>
            <div className="flex items-center border-2 border-black rounded-md overflow-hidden mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-87 outline-none bg-white"
              />
              <button className="bg-blue-500 text-white px-4 py-2 font-bold">
                SIGN UP
              </button>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-6 text-sm">
            <p>2025 Feastables</p>
            <p className="mt-2 flex flex-wrap justify-center space-x-4">
              <Link to="/404" className="underline">
                Privacy Policy
              </Link>
              <Link to="/404" className="underline">
                Terms of Service
              </Link>
              <Link to="/404" className="underline">
                Privacy Requests
              </Link>
              <Link to="/404" className="underline">
                Do Not Sell Or Share My Personal Information
              </Link>
            </p>
            <p className="mt-2 flex justify-center items-center">
              <span>POWERED BY</span>
              <img
                src="shopify.png"
                alt="Shopify"
                className="ml-2 bg-blue-400 h-6"
              />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

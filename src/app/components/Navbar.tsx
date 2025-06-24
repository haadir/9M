import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar bg-black w-full py-3 px-8 flex items-center relative min-h-[48px]">
      {/* Logo on the left */}
      <div className="flex items-center" style={{ minWidth: 90 }}>
        <Link href="/">
          <Image
            src="/9M-Logo.svg"
            alt="9M Logo"
            width={60}
            height={36}
            priority
          />
        </Link>
      </div>
      {/* Centered tabs */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-12">
        <Link
          href="#products"
          className="navbar-link text-white font-normal text-lg hover:opacity-80 transition"
        >
          Products
        </Link>
        <Link
          href="#careers"
          className="navbar-link text-white font-normal text-lg hover:opacity-80 transition"
        >
          Careers
        </Link>
        <Link
          href="#partner"
          className="navbar-link text-white font-normal text-lg hover:opacity-80 transition"
        >
          Partner
        </Link>
      </div>
      {/* Connect button on the right */}
      <div
        className="flex items-center ml-auto"
        style={{ minWidth: 120, justifyContent: "flex-end" }}
      >
        <a
          href="mailto:contact@9m.com"
          className="contact-btn flex items-center gap-2 px-8 py-2 rounded-md bg-gradient-to-b from-[#f9f9f9] to-[#bcbcbc] text-black font-medium border border-neutral-400 shadow-md transition-all duration-200 hover:from-[#e0e0e0] hover:to-[#a0a0a0] hover:scale-105 hover:shadow-lg min-w-[120px] justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#222"
              strokeWidth="1.5"
              d="M3.75 6.75A2.25 2.25 0 0 1 6 4.5h12a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 18 19.5H6a2.25 2.25 0 0 1-2.25-2.25V6.75Z"
            />
            <path
              stroke="#222"
              strokeWidth="1.5"
              d="m4.5 7.5 6.95 6.95a2.25 2.25 0 0 0 3.1 0L21 7.5"
            />
          </svg>
          Connect
        </a>
      </div>
    </nav>
  );
}

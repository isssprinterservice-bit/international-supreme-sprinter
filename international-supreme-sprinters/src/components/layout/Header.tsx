"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "The Sprinter" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="absolute left-0 top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container-iss flex h-24 items-center justify-between">

          <Link
            href="/"
            aria-label="International Supreme Sprinters home"
            className="relative h-[68px] w-[220px] shrink-0 md:w-[260px]"
          >
            <Image
              src="/images/logo/isslogo.png"
              alt="International Supreme Sprinters"
              fill
              priority
              className="object-contain object-left"
              sizes="(max-width: 768px) 220px, 260px"
            />
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/book"
              className="hidden bg-[#d9ff43] px-6 py-4 text-xs font-black uppercase tracking-wider text-black sm:flex"
            >
              Book Your Ride
            </Link>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="flex h-12 w-12 items-center justify-center border border-white/20 lg:hidden"
              aria-label={open ? "Close navigation" : "Open navigation"}
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-black px-7 pb-10 pt-32 text-white lg:hidden">
          <nav className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/15 py-5 text-3xl font-black tracking-[-0.04em]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="btn-primary mt-8 w-full"
          >
            Book Your Ride
          </Link>

          <p className="mt-8 text-sm text-white/40">
            Atlanta, Georgia
          </p>
        </div>
      )}
    </>
  );
}

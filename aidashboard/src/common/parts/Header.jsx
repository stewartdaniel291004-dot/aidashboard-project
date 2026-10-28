import React, { useEffect, useState } from "react";
import { useUserAuth } from "../../components/context/UserAuthContext";
import { Link, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import * as Dialog from "@radix-ui/react-dialog";
import { useData } from "../../components/context/DataContext";
import { IoMdClose } from "react-icons/io";
import { HiArrowRight } from "react-icons/hi";
import Logo from "./Logo";

const navLinks = [
  { to: "/home", label: "Home", match: "home" },
  { to: "/need-spark", label: "Why WebWeave", match: "need-spark" },
  { to: "/contact", label: "Contact", match: "contact" },
];

function Header() {
  const { user } = useUserAuth();
  const location = useLocation();
  const { isHamOpen, setIsHamOpen } = useData();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (match) => location.pathname.includes(match);

  const cta = user ? (
    <Link to="/dashboard" className="btn-weave !px-5 !py-2 text-sm md:text-base">
      Your Space <HiArrowRight />
    </Link>
  ) : (
    <Link to="/auth" className="btn-weave !px-5 !py-2 text-sm md:text-base">
      Get Started <HiArrowRight />
    </Link>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] px-3 pt-3 md:px-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 md:px-6 ${
          scrolled ? "glass" : "bg-white/40 backdrop-blur-md border border-white/40"
        }`}
      >
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsHamOpen(!isHamOpen)}
            aria-label="Open menu"
            className="rounded-lg p-2 text-xl text-brand-700 transition-all hover:bg-brand-50 md:hidden active:scale-90"
          >
            <HiMiniBars3 />
          </button>
          <Link to="/" aria-label="WebWeave home">
            <Logo markClassName="size-8 md:size-9" />
          </Link>
        </div>

        <nav className="hidden items-center gap-1 rounded-full border border-white/60 bg-white/50 p-1 backdrop-blur md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                isActive(l.match)
                  ? "bg-weave text-white shadow-glow"
                  : "text-gray-700 hover:bg-white hover:text-brand-700"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {cta}
      </div>

      <Dialog.Root open={isHamOpen} onOpenChange={setIsHamOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[10000] bg-weave-ink/40 backdrop-blur-sm data-[state=open]:animate-fadeIn" />
          <Dialog.Content className="fixed inset-x-3 top-3 z-[10001] rounded-3xl glass p-5 data-[state=open]:animate-slideDownAndFade focus:outline-none">
            <Dialog.Title className="sr-only">Navigation</Dialog.Title>
            <div className="flex items-center justify-between">
              <Link to="/" onClick={() => setIsHamOpen(false)}>
                <Logo markClassName="size-8" />
              </Link>
              <button
                onClick={() => setIsHamOpen(false)}
                aria-label="Close menu"
                className="rounded-lg p-2 text-xl text-brand-700 hover:bg-brand-50"
              >
                <IoMdClose />
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setIsHamOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                    isActive(l.match)
                      ? "bg-weave text-white"
                      : "text-gray-800 hover:bg-white/70"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="mt-5" onClick={() => setIsHamOpen(false)}>
              {cta}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}

export default Header;

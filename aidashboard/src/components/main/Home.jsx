import React from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { HiOutlineShare, HiArrowRight } from "react-icons/hi";
import { HiOutlineUsers, HiOutlineSparkles, HiOutlineArchiveBox, HiOutlineCodeBracket, HiOutlineGlobeAlt, HiOutlineUserPlus, HiOutlineRocketLaunch } from "react-icons/hi2";
import Header from "../../common/parts/Header";
import Footer from "../../common/parts/Footer";
import toast from "react-hot-toast";
import { HashLink } from "react-router-hash-link";
import { SaraAILink } from "../../common/links";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ once: true, duration: 800 });

const steps = [
  {
    icon: <HiOutlineUserPlus />,
    title: "Create your free account",
    text: "Sign in with Google, GitHub or Twitter in seconds — no credit card needed.",
  },
  {
    icon: <HiOutlineSparkles />,
    title: "Generate your Spaces",
    text: "Let Sara AI build a learning space for any topic, or start from a blank canvas.",
  },
  {
    icon: <HiOutlineRocketLaunch />,
    title: "Learn by building",
    text: "Write code, preview live, take notes and track progress — all in one place.",
  },
];

const features = [
  {
    icon: <HiOutlineCodeBracket />,
    title: "CodeSpace",
    text: "A focused coding environment with integrated compilers and real-time output.",
    href: "/need-spark#codespace",
  },
  {
    icon: <HiOutlineGlobeAlt />,
    title: "WebSpace",
    text: "Build responsive websites from templates with instant live previews.",
    href: "/need-spark#webspace",
  },
  {
    icon: <HiOutlineSparkles />,
    title: "AI Space Generation",
    text: "Turn any topic into custom lessons and starter code with one prompt.",
    href: "/need-spark#Sara",
  },
  {
    icon: <HiOutlineUsers />,
    title: "Collaboration",
    text: "Share spaces in Editor or Viewer mode and build together in real time.",
    href: "/need-spark#sharedspace",
  },
  {
    icon: <HiOutlineArchiveBox />,
    title: "Backup & Restore",
    text: "Space Trash keeps deleted work safe so you can recover it any time.",
    href: "/need-spark#spacetrash",
  },
  {
    icon: <HiOutlineRocketLaunch />,
    title: "Space Notes",
    text: "Capture insights next to your code and review them when it matters.",
    href: "/need-spark#spacenotes",
  },
];

function Home() {
  const { user } = useUserAuth();

  const HandleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: "WebWeave", url: window.origin });
      } else {
        await navigator.clipboard.writeText(window.origin);
        toast.success("Link copied to clipboard");
      }
    } catch (err) {
      toast.error("Unable to share.");
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-weave-soft">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-weave pt-28 text-white md:pt-32">
        <div className="ww-blob left-[-6rem] top-24 h-80 w-80 bg-weave-pink opacity-40 animate-float" />
        <div className="ww-blob right-[-4rem] top-10 h-96 w-96 bg-weave-cyan opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px]" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-5 pb-24 md:px-8 lg:flex-row lg:pb-32">
          <div data-aos="fade-up" className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
              <span className="size-2 rounded-full bg-weave-cyan" /> AI-powered learning
            </span>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Learn to code by
              <span className="block bg-gradient-to-r from-white via-brand-100 to-weave-cyan bg-clip-text text-transparent">
                weaving ideas into apps
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              WebWeave brings CodeSpace, WebSpace, Space Notes and Sara AI
              together in one dashboard — so you can learn, build and share
              with real-time previews and an AI assistant by your side.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link
                to={user ? "/dashboard" : "/auth"}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
              >
                {user ? "Open your Space" : "Get started free"} <HiArrowRight />
              </Link>
              <HashLink to="/need-spark" className="btn-ghost">
                Explore features
              </HashLink>
              <button
                onClick={HandleShare}
                aria-label="Share WebWeave"
                className="flex size-12 items-center justify-center rounded-full border border-white/40 bg-white/10 text-lg backdrop-blur transition hover:bg-white/20 active:scale-95"
              >
                <HiOutlineShare />
              </button>
            </div>
            <div className="mt-10 grid w-full max-w-md grid-cols-3 gap-3">
              {[
                ["2", "Workspaces"],
                ["24/7", "AI assistance"],
                ["Free", "To start"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-2xl glass-dark px-3 py-3 text-center">
                  <div className="text-xl font-bold">{v}</div>
                  <div className="text-xs text-white/70">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="150" className="w-full lg:w-1/2">
            <div className="rounded-3xl glass-dark p-2 shadow-2xl md:p-3">
              <div className="mb-2 flex items-center gap-1.5 px-2 pt-1">
                <span className="size-2.5 rounded-full bg-white/40" />
                <span className="size-2.5 rounded-full bg-white/40" />
                <span className="size-2.5 rounded-full bg-white/40" />
                <span className="ml-3 text-xs text-white/60">CodeSpace ⇄ WebSpace</span>
              </div>
              <ReactCompareSlider
                position={70}
                changePositionOnHover={true}
                itemOne={
                  <ReactCompareSliderImage
                    src="https://ik.imagekit.io/vituepzjm/codespace2.png?updatedAt=1734705428800"
                    alt="CodeSpace preview"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src="https://ik.imagekit.io/vituepzjm/webspace.png?updatedAt=1734704706719"
                    alt="WebSpace preview"
                  />
                }
                style={{ width: "100%", borderRadius: "18px" }}
              />
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[#f8f7ff]" />
      </section>

      {/* Steps */}
      <section className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div data-aos="fade-up" className="relative">
            <div className="ww-blob -left-10 -top-10 h-56 w-56 bg-brand-400 opacity-30" />
            <div className="relative overflow-hidden rounded-3xl glass p-2">
              <img
                alt="Getting started with WebWeave"
                className="h-full w-full rounded-2xl object-cover"
                src="https://ik.imagekit.io/vituepzjm/WhatsApp%20Image%202024-12-25%20at%2010.14.29%20PM.jpeg?updatedAt=1735403330914"
              />
              <span className="absolute right-5 top-5 rounded-full glass px-3 py-1 text-xs font-semibold text-brand-700">
                3 steps to start
              </span>
            </div>
          </div>
          <div>
            <span className="eyebrow">How it works</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From sign-up to shipping in <span className="text-weave">minutes</span>
            </h2>
            <div className="mt-8 space-y-4">
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="group flex gap-4 rounded-2xl glass p-5 transition hover:-translate-y-0.5 hover:shadow-glow"
                >
                  <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-xl bg-weave text-2xl text-white shadow-glow">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      <span className="mr-2 text-brand-500">0{i + 1}</span>
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow">Features</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to <span className="text-weave">learn and build</span>
          </h2>
          <p className="mt-3 text-gray-600">Thoughtfully designed tools that work together, not against you.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <HashLink
              key={f.title}
              to={f.href}
              data-aos="fade-up"
              data-aos-delay={(i % 3) * 100}
              className="group relative flex flex-col rounded-3xl glass p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-2xl text-brand-600 transition group-hover:bg-weave group-hover:text-white">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 flex-grow text-sm leading-relaxed text-gray-600">{f.text}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                Learn more <HiArrowRight className="transition group-hover:translate-x-1" />
              </span>
            </HashLink>
          ))}
        </div>
      </section>

      {/* Sara AI */}
      <section id="sara-ai" className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <div data-aos="fade-up" className="relative overflow-hidden rounded-[2rem] bg-weave p-8 text-white md:p-14">
          <div className="ww-blob -right-10 -top-10 h-72 w-72 bg-weave-cyan opacity-40" />
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
                Meet Sara AI
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Your always-on coding companion</h2>
              <p className="mt-4 text-white/80">
                Sara AI is built into every CodeSpace and WebSpace. Ask questions,
                debug errors, get explanations and generate starter code — right
                where you work.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={SaraAILink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand-700 shadow-lg transition hover:-translate-y-0.5 active:scale-95"
                >
                  Try Sara AI <HiArrowRight />
                </a>
                <HashLink to="/need-spark#Sara" className="btn-ghost">How it works</HashLink>
              </div>
            </div>
            <div className="rounded-3xl glass-dark p-5">
              <div className="flex items-center gap-3">
                <img src="https://ik.imagekit.io/vituepzjm/Sara.png" alt="Sara AI" className="size-10 rounded-full bg-white/80 p-1" />
                <div>
                  <div className="font-semibold">Sara AI</div>
                  <div className="text-xs text-white/60">Online · ready to help</div>
                </div>
              </div>
              <div className="mt-5 space-y-3 text-sm">
                <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-white/90 px-4 py-2 text-gray-800">
                  Why does my flexbox not center vertically?
                </div>
                <div className="w-fit max-w-[90%] rounded-2xl rounded-bl-md bg-white/15 px-4 py-2">
                  Add <code className="rounded bg-black/30 px-1">align-items: center</code> and give the
                  container a height — e.g. <code className="rounded bg-black/30 px-1">min-height: 100vh</code>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-5 pb-24 text-center md:px-8">
        <div data-aos="zoom-in" className="rounded-[2rem] glass px-6 py-14 md:px-14">
          <span className="eyebrow">Join WebWeave</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready for a smarter, <span className="text-weave">collaborative</span> way to learn?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Create your first Space today and see how fast ideas turn into working code.
          </p>
          <Link to={user ? "/dashboard/home" : "/auth"} className="btn-weave mt-8">
            {user ? "Go to dashboard" : "Get started now"} <HiArrowRight />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
